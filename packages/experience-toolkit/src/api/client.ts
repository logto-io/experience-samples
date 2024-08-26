import {
  InteractionEvent,
  type RequestErrorBody,
  type PasswordVerificationPayload,
} from '@logto/schemas';

import { Api, type HttpResponse } from './experience-api.js';

const isHttpResponseError = <T>(error: unknown): error is HttpResponse<T, RequestErrorBody> => {
  return error instanceof Response && 'error' in error;
};

/* eslint-disable @typescript-eslint/ban-types */
type ApiClientResponseType<T> = Promise<
  | {
      data: T;
      error: null;
    }
  | {
      data: null;
      error: RequestErrorBody;
    }
>;
/* eslint-enable @typescript-eslint/ban-types */

class ExperienceApiClient {
  private readonly api = new Api({
    baseUrl: window.location.origin,
  });

  async signInWithPasswordIdentifier(payload: PasswordVerificationPayload) {
    return this.tryRequest(async () => {
      await this.api.experience.initInteraction(
        {
          interactionEvent: InteractionEvent.SignIn,
        },
        {
          format: 'json',
        }
      );

      const { verificationId } = await this.api.experience.createPasswordVerification(payload, {
        format: 'json',
      });

      await this.api.experience.identifyUser(
        { verificationId },
        {
          format: 'json',
        }
      );

      return this.api.experience.submitInteraction({ format: 'json' });
    });
  }

  private async tryRequest<T>(request: () => Promise<T>): ApiClientResponseType<T> {
    try {
      const result = await request();

      return { data: result, error: null };
    } catch (error: unknown) {
      if (isHttpResponseError(error)) {
        return { data: null, error: error.error };
      }

      throw error;
    }
  }
}

export default ExperienceApiClient;
