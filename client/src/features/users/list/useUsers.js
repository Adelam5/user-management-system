import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getUsers = async (filter) => {
  const { data } = await axios.get(`/api/users${filter}`);
  return data;
};

export default function useUsers(filter) {
  return useQuery(["users", filter], () => getUsers(filter), {
    refetchOnWindowFocus: false,
  });
}
