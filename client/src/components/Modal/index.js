import { useStore } from "store";

import { StyledModal } from "./Modal.styles";

const Modal = ({ title, children }) => {
  const setShowModal = useStore((state) => state.setShowModal);

  return (
    <StyledModal>
      <div>
        <div className="modal-header">
          <h1>{title}</h1>
          <span onClick={() => setShowModal(false)} className="close">
            &times;
          </span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </StyledModal>
  );
};

export default Modal;
