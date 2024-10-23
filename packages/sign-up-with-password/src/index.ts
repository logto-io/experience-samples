import { Api } from '@logto/experience-sample-shared/api';
import { clearError, handleError, setSubmitLoading } from '@logto/experience-sample-shared/utils';
import { InteractionEvent } from '@logto/schemas';

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
      const confirmPassword = formData.get('confirm-password')?.toString();

      if (!username || !password) {
        throw new Error('Username and password are required.');
      }

      if (password !== confirmPassword) {
        throw new Error('Passwords do not match.');
      }

      /**
       * Step 1: Initialize a register type interaction.
       */
      await api.experience.initInteraction({ interactionEvent: InteractionEvent.Register });

      /**
       * Step 2: Ensure the username is not already taken.
       */
      await api.experience.addUserProfile({ type: 'username', value: username });

      /**
       * Step 3: Continue registering with password.
       */
      await api.experience.addUserProfile({ type: 'password', value: password });

      /**
       * Step 4: Identify the user.
       *
       * Note: Unlike registering with verification code or social, register with identifier and password
       * does not require a verification step in prior, but the identification step is still required.
       */
      await api.experience.identifyUser({});

      /**
       * Step 5: Submit the interaction and redirect back to your app after the interaction is completed.
       */
      const { redirectTo } = await api.experience.submitInteraction();
      window.location.replace(redirectTo);
    } catch (error) {
      handleError(error);
      setSubmitLoading(false);
    }
  });
});
