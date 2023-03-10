// Validation object field
export const isValidObjectField = (obj) => {
  return Object.values(obj).every((value) => value.trim());
};

// Update Error
export const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater("");
  }, 2000);
};

// Validate Email
export const isValidEmail = (value) => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value);
};
