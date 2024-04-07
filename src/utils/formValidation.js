export const signInFormValidation = (email, password) => {
  if (password.length < 5) return "Your password must be between 5 and 60 characters long.";
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return ("Please enter a valid email address.");
  if (!isPasswordValid) return "Your password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 5 characters long.";
  return null
}

export const signUpFormValidation = (email) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  if (!isEmailValid) return ("Please enter a valid email address.");
  return null;
}

export const signUpFormEmailValidation = (email) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  if (!isEmailValid) return ("Please enter a valid email address.");
  return null;
}

export const passwordValidation = (password) => {
  if (password.length < 5) return "Your password must be between 5 and 60 characters long.";
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isPasswordValid) return "Your password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 5 characters long.";
  return null
}