import { Link } from "react-router-dom";

import { useStore } from "store";

import Button from "components/Button";
import useDeleteUser from "./useDeleteUser";
import { Buttons } from "components/Button/Button.styles";

const ConfirmDelete = () => {
  const setShowModal = useStore((state) => state.setShowModal);
  const selectedUser = useStore((state) => state.selectedUser);
  const { mutate: remove } = useDeleteUser();

  return (
    <>
      <p>Are you sure you want to delete this user? </p>
      <Buttons>
        <Button
          onClick={() => {
            remove(selectedUser);
            setShowModal(false);
          }}
          label="Confirm"
        />
        <Button
          as={Link}
          to="/"
          onClick={() => setShowModal(false)}
          variant="secondary"
          label="Cancel"
        />
      </Buttons>
    </>
  );
};

export default ConfirmDelete;
