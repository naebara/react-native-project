import { createSlice } from "@reduxjs/toolkit";

interface IAutentication {
  loggedIn: boolean;
}

const initialState: IAutentication = {
  loggedIn: false,
};

const autenticationSlice = createSlice({
  name: "autenticationSchema",
  initialState: initialState,
  reducers: {
    logIn: () => {
      return {
        loggedIn: true,
      };
    },
    logOut: () => {
      return {
        loggedIn: false,
      };
    },
  },
});

export const { logIn, logOut } = autenticationSlice.actions;
export default autenticationSlice.reducer;
