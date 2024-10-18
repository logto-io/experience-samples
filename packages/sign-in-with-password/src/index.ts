import { Api } from '@logto/experience-sample-shared/api';
import logo from '@logto/experience-sample-shared/assets/logto-logo-light.svg';
import { InteractionEvent, SignInIdentifier } from '@logto/schemas';

import '@logto/experience-sample-shared/scss/normalized.scss';

const api = new Api({ baseUrl: window.location.origin });

window.addEventListener('load', () => {
  document.querySelector('.logo')?.setAttribute('src', logo);
  const form = document.querySelector('#sign-in-form');
  const submitButton = document.querySelector('.submit-button');
  const errorContainer = document.querySelector('.error-message');

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    errorContainer?.classList.remove('hidden');
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const username = formData.get('username')?.toString();
    const password = formData.get('password')?.toString();

    try {
      submitButton?.setAttribute('disabled', 'disabled');
      submitButton?.classList.add('loading');

      if (!username || !password) {
        throw new Error('Username and password are required.');
      }

      await api.experience.initInteraction(
        { interactionEvent: InteractionEvent.SignIn },
        { format: 'json' }
      );

      const { verificationId } = await api.experience.createPasswordVerification(
        {
          // You can change the identifier type to email or phone if that's your sign-in identifier.
          identifier: { type: SignInIdentifier.Username, value: username },
          password,
        },
        { format: 'json' }
      );

      await api.experience.identifyUser({ verificationId }, { format: 'json' });

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
