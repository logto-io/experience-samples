import { Api } from '@logto/experience-sample-shared/api';
import logo from '@logto/experience-sample-shared/assets/logto-logo-light.svg';
import { InteractionEvent } from '@logto/schemas';

import '@logto/experience-sample-shared/scss/normalized.scss';

const defaultResendCodeTimeout = 60;
const api = new Api({ baseUrl: window.location.origin });

window.addEventListener('load', () => {
  document.querySelector('.logo')?.setAttribute('src', logo);
  const form = document.querySelector('form');
  const sendCodeButton = document.querySelector('.button');
  const submitButton = document.querySelector('.submit-button');
  const errorContainer = document.querySelector('.error-message');

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

      await api.experience.initInteraction(
        { interactionEvent: InteractionEvent.Register },
        { format: 'json' }
      );
      const { verificationId: id } = await api.experience.createAndSendVerificationCode({
        identifier: { type: 'email', value: email },
        interactionEvent: InteractionEvent.Register,
      });

      verificationId = id;
    } catch (error) {
      handleError(error);
    }
  });

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    errorContainer?.classList.remove('hidden');
    const formData = new FormData(form);
    const email = formData.get('email')?.toString();
    const verificationCode = formData.get('verification-code')?.toString();

    try {
      submitButton?.setAttribute('disabled', 'disabled');
      submitButton?.classList.add('loading');

      if (!email || !verificationCode) {
        throw new Error('Email and verification code are required.');
      }

      await api.experience.verifyVerificationCodeVerification(
        {
          identifier: { type: 'email', value: email },
          verificationId,
          code: verificationCode,
        },
        { format: 'json' }
      );

      await api.experience.identifyUser({ verificationId });

      const { redirectTo } = await api.experience.submitInteraction({ format: 'json' });
      window.location.replace(redirectTo);
    } catch (error) {
      handleError(error);
    }
  });
});

const handleError = (error: unknown) => {
  const errorContainer = document.querySelector('.error-message');
  const submitButton = document.querySelector('.submit-button');

  console.error(error);
  if (errorContainer) {
    errorContainer.classList.remove('hidden');
    errorContainer.innerHTML =
      error instanceof Error
        ? error.message
        : 'Error occurred. Please check debugger console for details.';
  }

  submitButton?.removeAttribute('disabled');
  submitButton?.classList.remove('loading');
};
