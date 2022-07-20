import { Title } from "assets/styles/GlobalStyles";
import { Filters, UsersTable } from "features/users/list";

const UsersList = () => {
  return (
    <div>
      <Title>User List</Title>
      <Filters />
      <UsersTable />
    </div>
  );
};

export default UsersList;
