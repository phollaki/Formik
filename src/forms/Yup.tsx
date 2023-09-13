import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Inputs } from './CustomValidation';
import { NativeErrorMessage } from '../components/ErrorMessage';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
})

const initialValues: Inputs ={
  firstName: '',
  lastName: '',
  email: '',
}

export default function YupForm () {
  const formik = useFormik<Inputs>({
    initialValues,
    validationSchema,
    onSubmit: values => alert(JSON.stringify(values, null, 2))
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <NativeErrorMessage>{formik.errors.firstName}</NativeErrorMessage>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <NativeErrorMessage>{formik.errors.lastName}</NativeErrorMessage>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <NativeErrorMessage>{formik.errors.email}</NativeErrorMessage>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};