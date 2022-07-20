import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const updateUser = async (user) => {
  const { data } = await axios.put(`/api/users/${user.id}`, user.data);
  return data;
};

export default function useUpdateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(updateUser, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["users", data.data._id]);
      navigate("/");
    },
  });
}
