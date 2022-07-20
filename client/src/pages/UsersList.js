import { Title } from "assets/styles/GlobalStyles";

import UsersTable from "features/users/list/UsersTable";

const UsersList = () => {
  return (
    <div>
      <Title>User List</Title>
      <UsersTable />
    </div>
  );
};

export default UsersList;
