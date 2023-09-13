import styled from "styled-components";
import Basic from "./forms/Basic";
import BasicWithoutRHF from "./forms/WithoutRHF";
import WithFormikHook from "./forms/WithFormikHook";
import BasicWithHook from "./forms/BasicWithFormikHook";
import CustomValidation from "./forms/CustomValidation";
import YupForm from "./forms/Yup";
import ZodForm from "./forms/Zod";
import ZodWithHook from "./forms/ZodWithHook";

const Section = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`
const SectionTitle = styled.h2`
  color: white;
  font-size: 20px;
`

const ExampleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Line = styled.hr`
  height: 2px;
  background-color: #ccc;
`

function App() {
  return (
    <div className="App">
      <Section>
        <SectionTitle>Basic</SectionTitle>
        <ExampleRow>
          <Basic />
          <BasicWithHook />
          <BasicWithoutRHF />
        </ExampleRow>
      </Section>

      <Line />

      <Section>
        <SectionTitle>With formik hook</SectionTitle>
        <WithFormikHook />
      </Section>

      <Line />

      <Section>
        <SectionTitle>Custom validation</SectionTitle>
        <CustomValidation />
      </Section>

      <Line />

      <Section>
        <SectionTitle>Yup</SectionTitle>
        <YupForm />
      </Section>

      <Line />

      <Section>
        <SectionTitle>Zod</SectionTitle>
        <ZodForm />
      </Section>

      <Line />

      <Section>
        <SectionTitle>Zod With Hook</SectionTitle>
        <ZodWithHook />
      </Section>
    </div>
  );
}

export default App;
