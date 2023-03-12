import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useUserSelector = () => {
  const state = useSelector((state: RootState) => state.entities.user);
  return state;
};

export const selectUserName = (state: RootState) => state.entities.user.name;

export const selectUserPass = (state: RootState) => state.entities.user.pass;

export const selectUserEmail = (state: RootState) => state.entities.user.email;
