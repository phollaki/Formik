import { useFormik } from 'formik';
import { RenderCountHeader } from '../components/RenderCountHeader';

type Inputs = {
  email: string;
}
let renderCount = 0;

function WithFormikHook() {
  renderCount++;

  const { handleSubmit, handleChange, values: { email }} = useFormik<Inputs>({
    initialValues: {
      email: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
    <RenderCountHeader count={renderCount}/>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        value={email}
      />

      <button type="submit">Submit</button>
    </form>
    </>

  );
}

export default WithFormikHook