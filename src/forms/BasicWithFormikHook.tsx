import { Formik, Form, Field, useFormik } from 'formik';
import { RenderCountHeader } from '../components/RenderCountHeader';
import { ErrorMessage } from '../components/ErrorMessage';

type Inputs = {
  username: string;
  password: string;
}


const initialValues: Inputs = {
  username: '',
  password: '',
};

let renderCount = 0;

export default function BasicWithHook() {
  renderCount++;

  const formik = useFormik<Inputs>({
    initialValues,
    validate: (values: Inputs) => {
      const errors: Partial<Inputs> = {};
      if (!values.username) {
        errors.username = 'Username is required';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      }
      return errors;
    },

    onSubmit: (data: Inputs) => {
      console.log('submitted data: ', data);
    }
  });

  return (
    <div>
      <RenderCountHeader count={renderCount}/>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="username"
          name="username"
          type="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username && <p style={{ color: 'red' }}>{formik.errors.username}</p>}

        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <p style={{ color: 'red' }}>{formik.errors.password}</p>}

      <button type="submit">Submit</button>
      </form>
    </div>
  );
}
