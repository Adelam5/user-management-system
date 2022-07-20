import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme, variant }) => theme.colors[variant]};
  color: ${({ theme, variant }) =>
    variant === "secondary" ? theme.colors.dark : theme.colors.white};
  border: none;
  border-radius: 3px;
  padding: 6px 12px;
  cursor: ${({ disabled }) => (disabled ? "normal" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? "0.7" : "1")};
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1rem;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-left: 100px;
  justify-content: end;
  gap: 0.6rem;
`;

export default StyledButton;
