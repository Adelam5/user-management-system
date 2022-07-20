import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledFooter;
