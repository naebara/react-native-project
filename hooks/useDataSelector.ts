import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useUserSelector } from "./userUserSelector";

export const useDataSelector = () => {
  const state = useSelector((state: RootState) => state.entities.data);
  return state;
};

export const selectAutenticationSuccess = () => {
  const { users } = useDataSelector();
  const { email, pass } = useUserSelector();
  return users.some((user) => user.email === email && user.pass === pass);
};
