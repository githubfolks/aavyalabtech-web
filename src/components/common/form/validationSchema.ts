import * as Yup from "yup";

export const minText = (t: string, l: number) => {
  return `${t} must be ${l} caharacter or more`;
};
export const maxText = (t: string, l: number) => {
  return `${t} must be less than ${l} caharacter `;
};
export const requiredText = (t: string) => {
  return `${t} is required`;
};

export const contactValidationSchema = Yup.object({
  fname: Yup.string()
    .trim()
    .min(2, minText("First name", 2))
    .required(requiredText("First name")),
  lname: Yup.string()
    .trim()
    .min(2, minText("Last name", 2))
    .required(requiredText("Last name")),
  email: Yup.string()
    .trim()
    .email("Enter valid email address")
    .required(requiredText("Email")),

  mobile: Yup.string().required(requiredText("Mobile number")),

  message: Yup.string(),
});

export const registerValidationSchema = Yup.object({
  Name: Yup.string()
    .trim()
    .min(2, minText("Name", 2))
    .required(requiredText("Name")),
  Email: Yup.string()
    .trim()
    .email("Enter valid email address")
    .required(requiredText("Email")),

  Phone: Yup.string()
    .min(10, "Please enter valid phone number")
    .max(15, "Please enter valid phone number")
    .required(requiredText("Phone Number")),
});
export const loginSchema = Yup.object({
  Email: Yup.string().email().required(requiredText("Email")),
  Password: Yup.string().required(requiredText("Password")),
});

export const quotetionSchema = Yup.object({
  Name: Yup.string()
    .trim()
    .min(2, minText("Name", 2))
    .required(requiredText("Name")),
  Email: Yup.string()
    .trim()
    .email("Enter valid email address")
    .required(requiredText("Email")),

  Mobile: Yup.string().required(requiredText("Mobile number")),
});

export const updateProfileSchema = Yup.object({
  Name: Yup.string()
    .trim()
    .min(2, minText("Name", 2))
    .required(requiredText("Name")),
  Email: Yup.string()
    .trim()
    .email("Enter valid email address")
    .required(requiredText("Email")),

  Phone: Yup.string().required(requiredText("Phone Number")),
});

export const changePasswordSchema = Yup.object({
  OldPassword: Yup.string().required(requiredText("Current Password")),
  Password: Yup.string()
    .trim()
    .min(6, minText("Password", 6))
    .required(requiredText("Password")),
  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref("Password")], "Passwords must match")
    .required("mandatory"),
});

export const resetPasswordScheama = Yup.object({
  ResetToken: Yup.string().required(requiredText("Reset Token")),
  Password: Yup.string()
    .trim()
    .min(6, minText("Password", 6))
    .required(requiredText("Password")),
  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref("Password")], "Passwords must match")
    .required("mandatory"),
});
