import styled from "styled-components";
import { ErrorMessage as FormikErrorMessage } from 'formik'

export const ErrorMessage = styled(FormikErrorMessage)`
  padding: 2px 0px 10px 0px;
  color: red;
`

export const NativeErrorMessage = styled.p`
  padding: 2px 0px 10px 0px;
  color: red;
`