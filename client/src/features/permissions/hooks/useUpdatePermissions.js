import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const updatePermission = async (permission) => {
  const { data } = await axios.put(`/api/users/${permission.userId}/permissions`, permission.data);
  return data;
};

export default function useUpdatePermission() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(updatePermission, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      navigate("/");
    },
  });
}
