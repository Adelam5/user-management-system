import { Form } from "formik";
import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridFormContainer = styled.div`
  display: grid;
`;

export const SmallFormContainer = styled(FormContainer)`
  height: calc(100vh - 130px);
`;

export const StyledForm = styled(Form)`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0px 0px 12px 3px rgba(0, 255, 255, 0.7);
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

export const SimpleForm = styled(StyledForm)`
  box-shadow: none;
`;

export const GridForm = styled(StyledForm)`
  @media screen and (max-width: 1045px) {
    display: flex;
  }

  box-shadow: none;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 20% 30%;

  > h1 {
    grid-column: 1 / span 3;
  }

  .author1 {
    grid-column: 1 / span 2;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 1.5rem;
  color: #fff;
  text-align: center;
`;
