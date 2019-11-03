export const validatePassword = (value: string) => {
  if (value.length < 8) {
    return 'You password  must be more than 8 characters.';
  }
  return true;
};
