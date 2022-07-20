import { Link } from "react-router-dom";

import { useStore } from "store";

import { FaUserEdit, FaTrashAlt, FaPlus } from "assets/icons";
import { Action, TableWrapper, Th } from "./Table.styles";
import TableHeadCell from "./TableHeadCell";

const Table = ({ data }) => {
  const setShowModal = useStore((state) => state.setShowModal);
  const setSelectedUser = useStore((state) => state.setSelectedUser);

  const handleDelete = (userId) => {
    setShowModal(true);
    setSelectedUser(userId);
  };

  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            <TableHeadCell label="First name" name="firstName" />
            <TableHeadCell label="Last name" name="lastName" />
            <TableHeadCell label="Username" name="username" />
            <TableHeadCell label="Email" name="email" />
            <TableHeadCell label="Status" name="status" />
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d) => (
            <tr key={d._id}>
              <td>{d.firstName}</td>
              <td>{d.lastName}</td>
              <td>{d.username}</td>
              <td>{d.email}</td>
              <td>{d.status}</td>
              <td className="actions">
                <Action as={Link} to={`/edit/${d._id}`} title="Edit user">
                  <FaUserEdit className="edit" />
                </Action>
                <Action onClick={() => handleDelete(d._id)} title="Delete user">
                  <FaTrashAlt className="delete" />
                </Action>
                <Action
                  as={Link}
                  to={`/assign/${d._id}`}
                  title="Assign permissions"
                >
                  <FaPlus className="assign" />
                </Action>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default Table;
