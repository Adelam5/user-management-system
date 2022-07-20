import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  & > div {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.secondary};
    width: 350px;
    height: 225px;
  }
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #888;
    padding: 10px;
  }
  .modal-body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 1.1rem;
    height: 180px;
    padding: 20px;
  }

  .close {
    color: #888;
    float: right;
    font-size: 2em;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
