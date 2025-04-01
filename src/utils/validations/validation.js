import { EMAIL_REGEX, NAME_REGEX, PASSWORD_REGEX } from "../regex/regex";

const isValidEmail = (email) => {
  return EMAIL_REGEX.test(email);
};
const isNameValid = (name) => {
  return NAME_REGEX.test(name);
};
const isPasswordValid = (password) => {
  return PASSWORD_REGEX.test(password);
};

export { isValidEmail, isNameValid, isPasswordValid };
