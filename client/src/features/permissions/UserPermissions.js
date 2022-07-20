import { useParams } from "react-router-dom";

import { useStore } from "store";
import useUser from "features/users/useUser";
import usePermissions from "./hooks/usePermissions";
import useUpdatePermission from "./hooks/useUpdatePermissions";

import { List, ListItem } from "./Permissions.styles";

import Button from "components/Button";

const UserPermissions = () => {
  const userPermissions = useStore((state) => state.userPermissions);
  const setUserPermissions = useStore((state) => state.setUserPermissions);

  const { id } = useParams();
  const { data: user } = useUser(id);
  const { data: permissions } = usePermissions();
  const { mutate: updateUserPermissions } = useUpdatePermission();

  const handleChange = (e, permission) => {
    if (userPermissions.includes(permission._id)) {
      setUserPermissions(userPermissions.filter((p) => p != permission._id));
    } else {
      setUserPermissions([...userPermissions, permission._id]);
    }
  };

  const handleSave = () => {
    updateUserPermissions({
      userId: id,
      data: { permissions: userPermissions },
    });
  };

  return (
    <List>
      {permissions?.map((permission) => (
        <ListItem htmlFor={permission._id} key={permission._id}>
          {permission.description}
          <input
            type="checkbox"
            value={permission._id}
            id={permission._id}
            onChange={(e) => handleChange(e, permission)}
            checked={userPermissions.includes(permission._id)}
          />
          <span className="checkmark"></span>
        </ListItem>
      ))}
      <Button label="Save" onClick={handleSave} />
    </List>
  );
};

export default UserPermissions;
