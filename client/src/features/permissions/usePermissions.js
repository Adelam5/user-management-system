import { useQuery } from "react-query";
import axios from "axios";

const getPermissions = async (filter) => {
  const { data } = await axios.get(`/api/permissions`);
  return data;
};

export default function usePermissions(filter) {
  return useQuery("permissions", () => getPermissions(), {
    refetchOnWindowFocus: false,
  });
}