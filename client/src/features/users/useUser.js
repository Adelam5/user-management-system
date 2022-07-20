import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useStore } from "store";

const getUser = async (userId) => {
  const { data } = await axios.get(`/api/users/${userId}`);
  return data.data;
};

export default function useUser(userId) {
  const setUserPermissions = useStore((state) => state.setUserPermissions);
  const queryClient = useQueryClient();
  return useQuery(["users", userId], () => getUser(userId), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setUserPermissions(data.permissions?.map((permission) => permission._id));
    },
    /*    initialData: () => {
      const user = queryClient
        .getQueryData(["users"])
        ?.find((user) => user._id == userId); // eslint-disable-line
      console.log(queryClient.getQueryData(["users"]));
      if (user) {
        return user;
      } else {
        return undefined;
      }
    }, */
  });
}
