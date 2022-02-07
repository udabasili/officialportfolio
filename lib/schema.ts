import * as Yup from 'yup';
 
export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  description: Yup.string()
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});