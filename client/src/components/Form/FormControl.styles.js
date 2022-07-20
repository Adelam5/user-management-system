import styled from "styled-components";

export const FormControl = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  height: 70px;
  margin: 2px;
  @media screen and (max-width: 690px) {
    width: 100%;
    height: 90px;
  }
`;

export const TAFormControl = styled.div`
  height: 260px;

  > div {
    display: flex;
  }

  @media screen and (max-width: 690px) {
    width: 100%;
    > div {
      display: block;
    }
  }
`;

export const Input = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  height: 40px;
  border: none;
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  width: ${({ variant }) =>
    variant === "block" ? "calc(100% - 100px)" : "auto"};
  outline: none;
  font-size: 1.1rem;
  padding: 2px 8px;
  &::placeholder {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 690px) {
    width: 95%;
    margin-left: 0;
  }
`;

export const Label = styled.label`
  display: inline-block;
  width: 100px;
  padding-right: 5px;
  font-size: 1.1rem;
  text-align: end;
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  @media screen and (max-width: 690px) {
    width: 95%;
    text-align: start;
  }
`;

export const ErrorText = styled.p`
  font-size: 0.85rem;
  margin-left: 110px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 0.2rem;
  @media screen and (max-width: 690px) {
    margin-left: 10px;
  }
`;

export const TextArea = styled.textarea`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  width: calc(100% - 100px);
  height: 230px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  &::placeholder {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 690px) {
    width: 95%;
    margin-left: 0;
  }
`;

export const Select = styled.select`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  height: 40px;
  border: none;
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  width: ${({ variant }) =>
    variant === "block" ? "calc(100% - 100px)" : "auto"};
  outline: none;
  font-size: 1.1rem;
  padding: 2px 8px;
  &::placeholder {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 690px) {
    width: 95%;
    margin-left: 0;
  }
`;
