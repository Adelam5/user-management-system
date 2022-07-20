import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.black};
  height: 70px;
  position: relative;
  //box-shadow: 0px 4px 8px 0px rgba(0, 255, 255, 0.6);
`;

export const Container = styled.div`
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-right: 10px;
  padding-left: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 10px;

  & > svg {
    font-size: 45px;
  }

  & > span {
    font-size: 30px;
  }
`;
export const Links = styled.div`
  display: none;
  @media screen and (max-width: 760px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    background-color: ${({ theme }) => theme.colors.black};
    width: 100%;
    min-height: 110px;
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    padding-top: 30px;
    padding-left: 55px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.secondary};
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.black};
  height: 70px;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.white};
    text-decoration-color: ${({ theme }) => theme.colors.primary};
    text-decoration-line: underline;
    text-decoration-thickness: 4px;
    text-underline-offset: 5px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 340px) {
    gap: 5px;
  }

  @media screen and (max-width: 761px) {
    & > a {
      display: none;
    }
  }
`;

export const MobileIcon = styled.div`
  & > svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 30px;
    cursor: pointer;

    @media screen and (min-width: 761px) {
      display: none;
    }
  }
`;
