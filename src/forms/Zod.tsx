import { z } from 'zod';
import { Field, Form, Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { ErrorMessage } from '../components/ErrorMessage';

const Schema = z.object({
  name: z.string(),
  age: z.number().max(10),
});

const initialValues = {
  name: '',
  age: 5,
}

export default function Zod (){
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(Schema)}
      onSubmit={(vals) => alert(JSON.stringify(vals, null, 2))}
    >{(props)=>(
      <Form {...props}>
        <Field name="name" placeholder="name" />
        {props?.errors?.name && <ErrorMessage name="name" component="div" />}

        <Field name="age" placeholder="age" type="number" />
        <ErrorMessage name="age" component="div" />

        <button type="submit">Submit</button>
      </Form>
    )}
    </Formik>
  )
}