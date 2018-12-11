const hasLength = (valueToCheck) => {
  if (!valueToCheck) return 'Required';
  const lengthAndNoSymbolsRegex = /^.+$/;
  return lengthAndNoSymbolsRegex.test(valueToCheck.toString()) ? null: 'Required';
};

const isPassword = (valueToCheck) => {
  if (!valueToCheck) return 'Password must be at least 6 characters';
  const passwordRegex = /^.{6,}$/;
  return passwordRegex.test(valueToCheck.toString()) ? null: 'Password must be at least 6 characters';
};

const isEmail = (valueToCheck) => {
  if (!valueToCheck) return 'Please enter a valid email';
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(valueToCheck.toString()) ? null: 'Please enter a valid email';
};

module.exports = {
  hasLength,
  isPassword,
  isEmail,
};
