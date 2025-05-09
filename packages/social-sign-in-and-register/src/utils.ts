import { fromUint8Array } from 'js-base64';

export const generateRandomString = (length: number) => {
  return fromUint8Array(crypto.getRandomValues(new Uint8Array(length)), true);
};

export const parseQueryParameters = (search: string) => {
  const searchParameters = new URLSearchParams(search);

  return Object.fromEntries(
    [...searchParameters.entries()].map(([key, value]) => [key, decodeURIComponent(value)])
  );
};

export const handleError = (error: unknown) => {
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
