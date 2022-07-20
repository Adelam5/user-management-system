import { Form } from "formik";
import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled(Form)`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  min-height: 350px;

  > h1 {
    margin-bottom: 1.5rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
  }

  > button {
    align-self: center;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 1.5rem;
  color: #fff;
  text-align: center;
`;

export const FilterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
