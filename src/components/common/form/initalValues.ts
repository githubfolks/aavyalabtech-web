interface FormValues {
  [key: string]: string | number;
}
export const contactInitalValues: FormValues = {
  fname: "",
  lname: "",
  email: "",
  mobile: "",
  message: "",
};

export const registerInitalValues: FormValues = {
  Email: "",
  Name: "",
  Phone:"",
  RoleId: 2,
};

export const loginInitialValues: FormValues = {
  Email: "",
  Password: "",
};
  
