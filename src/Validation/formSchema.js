import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Name is required ya chump!')
    .min(2, "name must be at least 2 characters"),
  email: yup
    .string()
    .email('Must be a valid email address ya chump!')
    .required('Email is required ya chump'),
  role: yup
    .string()
    .oneOf(['instructor', 'student', 'alumni'], 'Role is required COME ON!!!'),
  civil: yup
    .string()
    .oneOf(['traditional', 'gluten free'], 'Gotta be either married or single, bud.'),
  coding: yup.boolean(),
  reading: yup.boolean(),
  hiking: yup.boolean()
})

export default formSchema;