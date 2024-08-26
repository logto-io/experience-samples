import { ExperienceApiClient } from '@logto/experience-sample-toolkit';
import { type PasswordVerificationPayload } from '@logto/schemas';
import { useCallback, useState } from 'react';

const apiClient = new ExperienceApiClient();

const usePasswordSignIn = () => {
  const [errorMessage, setErrorMessage] = useState<string>();

  const clearErrorMessage = useCallback(() => {
    setErrorMessage(undefined);
  }, []);

  const onSubmit = useCallback(
    async (payload: PasswordVerificationPayload) => {
      clearErrorMessage();

      const { data, error } = await apiClient.signInWithPasswordIdentifier(payload);

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      const { redirectTo } = data;

      window.location.assign(redirectTo);
    },
    [clearErrorMessage]
  );

  return {
    onSubmit,
    errorMessage,
    clearErrorMessage,
  };
};

export default usePasswordSignIn;
