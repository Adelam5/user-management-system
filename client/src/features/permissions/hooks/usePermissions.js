import { useQuery } from "react-query";
import axios from "axios";

const getPermissions = async () => {
  const { data } = await axios.get("/api/permissions");
  return data.data;
};

export default function usePermissions() {
  return useQuery(["permissions"], getPermissions, {
    refetchOnWindowFocus: false,
  });
}
