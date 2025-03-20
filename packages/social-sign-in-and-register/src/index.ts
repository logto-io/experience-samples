import { Api } from '@logto/experience-sample-shared/api';
import { clearError, handleError, setSubmitLoading } from '@logto/experience-sample-shared/utils';
import { InteractionEvent, type RequestErrorBody } from '@logto/schemas';
import { validate } from 'superstruct';

import '@logto/experience-sample-shared/scss/normalized.scss';
import { connectorId, socialAccountNotExistErrorDataGuard } from './consts.js';
import { generateRandomString, parseQueryParameters } from './utils.js';

const api = new Api({ baseUrl: window.location.origin });

window.addEventListener('load', async () => {
  if (window.location.pathname.startsWith(`/callback/${connectorId}`)) {
    void handleSocialCallback();
  } else {
    document.querySelector('form')?.addEventListener('submit', handleSubmit);
  }
});

const parseIdentifyUserError = async (error: unknown) => {
  if (error instanceof Response) {
    const errorBody = await error.json<RequestErrorBody>();
    const [_, data] = validate(errorBody.data, socialAccountNotExistErrorDataGuard);

    return { ...errorBody, data };
  }
  throw error;
};

const handleSubmit = async (event: Event) => {
  event.preventDefault();
  setSubmitLoading(true);
  clearError();

  try {
    const state = generateRandomString(8);

    await api.experience.initInteraction({ interactionEvent: InteractionEvent.SignIn });
    const { verificationId, authorizationUri } = await api.experience.createSocialVerification(
      connectorId,
      {
        state,
        redirectUri: `${window.location.origin}/callback/${connectorId}`,
      }
    );

    sessionStorage.setItem('verificationId', verificationId);
    sessionStorage.setItem('state', state);

    window.location.assign(authorizationUri);
  } catch (error) {
    handleError(error);
    setSubmitLoading(false);
  }
};

const handleSocialCallback = async () => {
  document.querySelector('form')?.classList.add('hidden');
  const { state, ...connectorData } = parseQueryParameters(window.location.search);
  const verificationId = sessionStorage.getItem('verificationId');
  const stateInStorage = sessionStorage.getItem('state');

  try {
    if (!verificationId || !state || state !== stateInStorage) {
      throw new Error('Invalid session.');
    }

    await api.experience.verifySocialVerification(connectorId, {
      verificationId,
      connectorData,
    });

    try {
      await api.experience.identifyUser({ verificationId });
    } catch (error) {
      const { code, message, data } = await parseIdentifyUserError(error);
      if (code === 'user.identity_not_exist' && data?.relatedUser) {
        await api.experience.identifyUser({ verificationId, linkSocialIdentity: true });
        return;
      }
      if (code === 'user.identity_not_exist' && !data?.relatedUser) {
        await api.experience.updateInteractionEvent({
          interactionEvent: InteractionEvent.Register,
        });
        await api.experience.identifyUser({ verificationId });
        return;
      }
      throw new Error(message);
    }

    const { redirectTo } = await api.experience.submitInteraction();
    window.location.replace(redirectTo);
  } catch (error) {
    handleError(error);
    setSubmitLoading(false);
  }
};
