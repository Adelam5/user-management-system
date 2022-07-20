import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const getUser = async (userId) => {
  const { data } = await axios.get(`/api/users/${userId}`);
  return data.data;
};

export default function useUser(userId) {
  const queryClient = useQueryClient();
  return useQuery(["users", userId], () => getUser(userId), {
    refetchOnWindowFocus: false,
    /* initialData: () => {
      const user = queryClient
        .getQueryData("users")
        ?.find((user) => user._id == userId); // eslint-disable-line
      if (user) {
        return user;
      } else {
        return undefined;
      }
    }, */
  });
}
