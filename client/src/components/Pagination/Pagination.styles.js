import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const StyledPagination = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Pagination = styled(ReactPaginate)`
  list-style: none;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > li > a {
    border: 1px solid #fff;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  & > .selected > a {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
  }

  & > .disabled > a {
    opacity: 0.1;
    cursor: default;
  }
`;
