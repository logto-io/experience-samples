export const setSubmitLoading = (isLoading: boolean) => {
  const submitButton = document.querySelector('.submit-button');

  if (isLoading) {
    submitButton?.setAttribute('disabled', 'disabled');
    submitButton?.classList.add('loading');
  } else {
    submitButton?.removeAttribute('disabled');
    submitButton?.classList.remove('loading');
  }
};

export const handleError = (error: unknown) => {
  const errorContainer = document.querySelector('.error-message');
  if (errorContainer) {
    errorContainer.classList.remove('hidden');
    errorContainer.innerHTML =
      error instanceof Error
        ? error.message
        : 'Error occurred. Please check debugger console for details.';
  }
  console.error(error);
};

export const clearError = () => {
  const errorContainer = document.querySelector('.error-message');
  if (errorContainer) {
    errorContainer.innerHTML = '';
    errorContainer.classList.add('hidden');
  }
};
