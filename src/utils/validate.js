export const validateFormData = (name,email, password,number) => {
  const nameCheck=/^[A-Za-z\s]+$/.test(name);
  const numberCheck=/^(\+\d{1,3}[- ]?)?\d{10}$/.test(number);
 
  const emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const passwordCheck =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  //test() will return true or false
  if(!nameCheck) return "Name is not valid";
  if (!emailCheck) return "Email is not valid";
  if (!passwordCheck) return "Password is not valid";
  if (!numberCheck) return "Phone number is not valid";
  return null;
};
