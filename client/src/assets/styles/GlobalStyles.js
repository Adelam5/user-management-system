import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;;
        padding: 0;
        font-family: "Merriweather Sans", sans-serif;
    }

    body {
       position: relative;
       min-height: 100vh;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    
    `;

export default GlobalStyles;

export const MainWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.secondary};
  min-height: calc(100vh - 130px);
`;

export const MainContainer = styled.div`
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px 10px 70px;
`;

export const Title = styled.h1`
  // margin-bottom: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`;
