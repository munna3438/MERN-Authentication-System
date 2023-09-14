import toast from "react-hot-toast";

const toastErrorMsg = (message) => {
  toast.error(message);
};

//register verefication
export const registerValidate = (values) => {
  const error = emailVerify({}, values);
  usernameVerify(error, values);
  passwordVerify(error, values);
  return error;
};

//email validation
const emailsp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const emailVerify = (error = {}, values) => {
  if (!values.email) {
    error.email = toastErrorMsg("email is required....");
  } else if (values.email.includes(" ")) {
    error.email = toastErrorMsg("Worng Email...");
  } else if (!emailsp.test(values.email)) {
    error.email = toastErrorMsg("invalid email...");
  }
  return error;
};

//user validation
const usernameVerify = (error = {}, values) => {
  if (!values.username) {
    error.username = toastErrorMsg("username is required...");
  } else if (values.username.includes(" ")) {
    error.username = toastErrorMsg("invalid username....");
  }
  return error;
};
export const usernameValidate = (values) => {
  const errors = usernameVerify({}, values);
  return errors;
};

//password validation
const specialCharecter = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
const passwordVerify = (error = {}, values) => {
  if (!values.password) {
    error.password = toastErrorMsg("password is required...");
  } else if (values.password.includes(" ")) {
    error.password = toastErrorMsg("space not allow");
  } else if (values.password.length < 4) {
    error.password = toastErrorMsg("minimum 4 charecter");
  } else if (!specialCharecter.test(values.password)) {
    error.password = toastErrorMsg(
      "password must have special charecter ....!"
    );
  } else if (values.password.includes(" ")) {
    error.password = toastErrorMsg("invalid password");
  }
  return error;
};
export const passowrdValidate = (values) => {
  const error = passwordVerify({}, values);
  return error;
};

//validate reset password

export const resetPasswordValidation = async (values) => {
  const errors = passwordVerify({}, values);
  if (values.password !== values.confirmPassword) {
    errors.exist = toastErrorMsg("password not match");
  }
  return errors;
};

const profileVerify = (error = {}, values) => {
  if (!values.firstName) {
    error.firstName = toastErrorMsg("username is required...");
  } else if (!values.lastName) {
    error.lastName = toastErrorMsg("Last name is required....");
  } else if (!values.zipCode) {
    error.zipCode = toastErrorMsg("Zip Code is required....");
  } else if (!values.phoneNumber) {
    error.phoneNumber = toastErrorMsg("Phone Number is required....");
  }
  return error;
};
export const profileVAlidation = (values) => {
  const errors = profileVerify({}, values);
  return errors;
};
