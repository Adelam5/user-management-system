import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useStore } from "store";

const getUser = async (userId) => {
  const { data } = await axios.get(`/api/users/${userId}`);
  return data.data;
};

export default function useUser(userId) {
  const setUserPermissions = useStore((state) => state.setUserPermissions);
  return useQuery(["users", userId], () => getUser(userId), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setUserPermissions(data.permissions?.map((permission) => permission._id));
    },
  });
}
