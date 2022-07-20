import { Title } from "assets/styles/GlobalStyles";

import UserPermissions from "features/permissions/UserPermissions";

const AssignPermission = () => {
  return (
    <div>
      <Title>Assign Permissions</Title>
      <UserPermissions />
    </div>
  );
};

export default AssignPermission;
