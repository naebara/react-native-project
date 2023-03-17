import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useAuthenticationSelector = () => {
  const state = useSelector(
    (state: RootState) => state.entities.authentication
  );
  return state;
};
