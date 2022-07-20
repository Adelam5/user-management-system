import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const addUser = async (newUser) => {
  const { data } = await axios.post("/api/users", newUser);
  return data;
};

export default function useNewUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(addUser, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["users", data.data._id]);
      navigate("/");
    },
  });
}
