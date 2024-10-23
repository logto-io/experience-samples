import { Api } from '@logto/experience-sample-shared';
import { clearError, handleError, setSubmitLoading } from '@logto/experience-sample-shared/utils';
import { InteractionEvent, SignInIdentifier } from '@logto/schemas';

import '@logto/experience-sample-shared/scss/normalized.scss';

const api = new Api({ baseUrl: window.location.origin });

window.addEventListener('load', () => {
  const form = document.querySelector('form');

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    setSubmitLoading(true);
    clearError();

    try {
      const formData = new FormData(form);
      const username = formData.get('username')?.toString();
      const password = formData.get('password')?.toString();

      if (!username || !password) {
        throw new Error('Username and password are required.');
      }

      /**
       * Step 1: Initialize a sign-in type interaction.
       */
      await api.experience.initInteraction({ interactionEvent: InteractionEvent.SignIn });

      /**
       * Step 2: Create a password verification.
       *
       * Note:
       * 1. The password must meet your current password policy requirements.
       * 2. You can change the identifier type to `email` or `phone` if that's your sign-in identifier.
       */
      const { verificationId } = await api.experience.createPasswordVerification({
        identifier: { type: SignInIdentifier.Username, value: username },
        password,
      });

      /**
       * Step 3: Identify the user.
       */
      await api.experience.identifyUser({ verificationId });

      /**
       * Step 4: Submit the interaction and redirect back to your app after the interaction is completed.
       */
      const { redirectTo } = await api.experience.submitInteraction();
      window.location.replace(redirectTo);
    } catch (error) {
      handleError(error);
      setSubmitLoading(false);
    }
  });
});
