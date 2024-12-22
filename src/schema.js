// Import only necessary functions from yup
import * as yup from 'yup';

// Password validation regex:
// - At least one uppercase letter
// - At least one lowercase letter
// - At least one number
// - At least one special character
// - Minimum 5 characters
const regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

// Validation schema
// Structure defining the requirements needed
// for the form inputs to be valid

// When defining requirements for an input,
// the first function we need to call is the data type
export const schema = yup.object().shape({
  // Define requirements for the email field
  email: yup
    .string()
    .email('Please enter a valid email format')
    .required(),

  // Define requirements for the age field
  age: yup
    .number()
    .min(18,)
    .max(100,)
    .integer('Your age must be a whole number')
    .required(),

  // Define requirements for the password field
  password: yup
    .string()
    .min(5)
    // Check if password meets the criteria in the regex
    .matches(regex, 'Your password is not strong enough')
    .required(),

  // Define requirements for the confirm password field
  confirmPassword: yup
    .string()
    // oneOf checks if the input value matches
    // one of the values in the provided array
    // yup.ref allows us to access other input field values
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required(),
});
