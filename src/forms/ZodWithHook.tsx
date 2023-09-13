import { z } from 'zod';
import { useFormik } from 'formik';
import { toFormikValidate } from 'zod-formik-adapter';
import { NativeErrorMessage } from '../components/ErrorMessage';

const Schema = z.object({
  name: z.string().min(1),
  age: z.number().max(10),
});

type Inputs = z.infer<typeof Schema>

const initialValues = {
  name: '',
  age: 5,
}

export default function ZodWithHook (){
  const { handleSubmit, handleChange, values: { name, age }, errors } = useFormik<Inputs>({
    initialValues,
    validate: toFormikValidate(Schema),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        name="name"
        type="name"
        onChange={handleChange}
        value={name}
      />
      {errors?.name && <NativeErrorMessage>{errors.name}</NativeErrorMessage>}

      <input
        id="age"
        name="age"
        type="number"
        onChange={handleChange}
        value={age}
      />
      {errors?.age && <NativeErrorMessage>{errors.age}</NativeErrorMessage>}

      <button type="submit">Submit</button>
    </form>
  )
}