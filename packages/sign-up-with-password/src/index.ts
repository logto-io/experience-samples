import { Api } from '@logto/experience-sample-shared/api';
import logo from '@logto/experience-sample-shared/assets/logto-logo-light.svg';
import { InteractionEvent } from '@logto/schemas';

import '@logto/experience-sample-shared/scss/normalized.scss';

const api = new Api({ baseUrl: window.location.origin });

window.addEventListener('load', () => {
  document.querySelector('.logo')?.setAttribute('src', logo);
  const form = document.querySelector('form');
  const submitButton = document.querySelector('.submit-button');
  const errorContainer = document.querySelector('.error-message');

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    errorContainer?.classList.remove('hidden');
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const username = formData.get('username')?.toString();
    const password = formData.get('password')?.toString();
    const confirmPassword = formData.get('confirm-password')?.toString();

    try {
      submitButton?.setAttribute('disabled', 'disabled');
      submitButton?.classList.add('loading');

      if (!username || !password) {
        throw new Error('Username and password are required.');
      }

      if (password !== confirmPassword) {
        throw new Error('Passwords do not match.');
      }

      await api.experience.initInteraction(
        { interactionEvent: InteractionEvent.Register },
        { format: 'json' }
      );

      // Ensure the username is not already taken.
      // You can also use `type: 'email'` or `type: 'phone'`, if that's your sign-up identifier.
      await api.experience.addUserProfile({ type: 'username', value: username });

      // Continue registering with password.
      await api.experience.addUserProfile({ type: 'password', value: password });

      // Unlink registering with verification code or social, register with identifier and password does not
      // require a verification step in prior, but the identification step is still required.
      await api.experience.identifyUser({});

      const { redirectTo } = await api.experience.submitInteraction({ format: 'json' });
      window.location.replace(redirectTo);
    } catch (error) {
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
    }
  });
});
