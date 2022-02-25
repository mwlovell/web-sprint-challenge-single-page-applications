import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("name must be at least 2 characters")
    .min(2, "name must be at least 2 characters"),
    // retry until we find 3 matching <li.selected>

  email: yup
    .string()
    .email('Must be a valid email address ya chump!')
    .required('Email is required ya chump'),
  role: yup
    .string()
    .oneOf(['small', 'medium', 'large'], 'size is required COME ON!!!'),
  crust: yup
    .string()
    .oneOf(['traditional', 'gluten free'], 'Gotta be either traditional or single free, bud.'),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  bacon: yup.boolean(),
  olives: yup.boolean(),
  onions: yup.boolean(),
  peppers: yup.boolean()
})

export default formSchema;