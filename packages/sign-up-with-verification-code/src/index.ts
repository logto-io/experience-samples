import { Api } from '@logto/experience-sample-shared';
import { clearError, handleError, setSubmitLoading } from '@logto/experience-sample-shared/utils';
import { InteractionEvent } from '@logto/schemas';

import '@logto/experience-sample-shared/scss/normalized.scss';

const defaultResendCodeTimeout = 60;
const api = new Api({ baseUrl: window.location.origin });

window.addEventListener('load', () => {
  const form = document.querySelector('form');
  const sendCodeButton = document.querySelector('.button');

  let verificationId = '';

  sendCodeButton?.addEventListener('click', async (event) => {
    event.preventDefault();
    if (!form) {
      return;
    }

    const email = new FormData(form).get('email')?.toString();

    try {
      if (!email) {
        throw new Error('Email is required.');
      }

      sendCodeButton.setAttribute('disabled', 'disabled');
      sendCodeButton.innerHTML = `Resend (in ${defaultResendCodeTimeout}s)`;

      let timeoutId = -1;
      let remainingSeconds = defaultResendCodeTimeout - 1;

      const countDown = () => {
        timeoutId = window.setTimeout(() => {
          if (remainingSeconds > 0) {
            sendCodeButton.innerHTML = `Resend (in ${remainingSeconds}s)`;
            remainingSeconds--;
            countDown();
          } else {
            window.clearTimeout(timeoutId);
            sendCodeButton.innerHTML = 'Resend';
            sendCodeButton.removeAttribute('disabled');
          }
        }, 1000);
      };

      countDown();

      /**
       * Step 1: Initialize a register type interaction.
       */
      await api.experience.initInteraction({ interactionEvent: InteractionEvent.Register });

      /**
       * Step 2: Create a verification record and send out the verification code.
       */
      const { verificationId: id } = await api.experience.createAndSendVerificationCode({
        identifier: { type: 'email', value: email },
        interactionEvent: InteractionEvent.Register,
      });

      // Save the verificationId for later use.
      verificationId = id;
    } catch (error) {
      handleError(error);
    }
  });

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    setSubmitLoading(true);
    clearError();

    try {
      const formData = new FormData(form);
      const email = formData.get('email')?.toString();
      const verificationCode = formData.get('verification-code')?.toString();

      if (!email || !verificationCode) {
        throw new Error('Email and verification code are required.');
      }

      /**
       * Step 3: Verify the verification code.
       */
      await api.experience.verifyVerificationCodeVerification({
        identifier: { type: 'email', value: email },
        verificationId,
        code: verificationCode,
      });

      /**
       * Step 4: Identify the user.
       */
      try {
        await api.experience.identifyUser({ verificationId });
      } catch {
        /**
         * If the user is already registered yet, this API will returned an error with code 'user.email_already_in_use'.
         *
         * In this case, you have two options:
         * 1. Show the error and redirect the user to the sign-in page.
         * 2. Prompt the user for auto-sign-in and continue the flow.
         *
         * Example code for auto-sign-in:
         * --------------------------------------------
         * // Update the interaction event to 'SignIn'.
         * await api.experience.updateInteractionEvent({ interactionEvent: InteractionEvent.SignIn });
         *
         * // Identify the user again.
         * await api.experience.identifyUser({ verificationId });
         */
      }

      /**
       * Step 5: Submit the interaction and redirect back to your app after the interaction is completed.
       */
      const { redirectTo } = await api.experience.submitInteraction({ format: 'json' });
      window.location.replace(redirectTo);
    } catch (error) {
      handleError(error);
    }
  });
});
