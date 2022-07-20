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
  background-color: rgba(0, 0, 0, 0.5);
  & > div {
    padding: 0 50px 20px;
    border: 1px solid #888;
    border-radius: 5px;
    background-color: #efefef;
    width: 80%;
    height: 570px;
  }
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #888;
    padding-top: 10px;
  }
  .modal-body {
    font-size: 1.2em;
    max-height: 500px;
    white-space: wrap;
    overflow-y: auto;
    text-overflow: ellipsis;
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
