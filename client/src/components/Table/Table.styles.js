import styled from "styled-components";

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  table {
    border-collapse: collapse;
    width: 90%;
    margin-top: 30px;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 4px 8px;
  }

  table tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.black};
  }

  table tr:hover {
    cursor: default;
  }

  table th {
    text-align: left;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const Action = styled.div`
  font-size: 1.4rem;

  & > .edit {
    color: #c4a5fa;
  }

  & > .delete {
    color: #fc9d9c;
  }

  & > .assign {
    color: #f8ed9d;
  }
`;

export const Buttons = styled.div`
  display: flex;
`;

export const Th = styled.th`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div > span {
    display: flex;
    flex-direction: column;
  }

  svg {
    font-size: 1.3rem;
  }
`;
