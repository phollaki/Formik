import { Formik, Form, Field, FormikProps } from 'formik';
import { RenderCountHeader } from '../components/RenderCountHeader';
import { ErrorMessage } from '../components/ErrorMessage';

type Inputs = {
  username: string;
  password: string;
}

let renderCount = 0;

export default function Basic() {

  const initialValues: Inputs = {
    username: '',
    password: '',
  };

  const onSubmit = (data: Inputs) => {
    console.log('submitted data: ', data);
  };

  return (
    <div>
      <RenderCountHeader count={renderCount}/>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={(values: Inputs) => {
          const errors: Partial<Inputs> = {};
          if (!values.username) {
            errors.username = 'Username is required';
          }
          if (!values.password) {
            errors.password = 'Password is required';
          }
          return errors;
        }}
      >
        {(props) => (
          <FormikForm {...props as any}/>
        )}
      </Formik>
    </div>
  );
}

const FormikForm = ({props}: {props: FormikProps<Inputs>}) => {
  renderCount++;

  return (
    <Form {...props}>
       <Field name="username" placeholder="username" />
      {props?.errors?.username && <ErrorMessage name="username" component="div" />}

      <Field name="password" placeholder="password" type="password" />
      <ErrorMessage name="password" component="div" />

      <button type="submit">Submit</button>
    </Form>
  )
}
