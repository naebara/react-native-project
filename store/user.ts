import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  name: string;
  pass: string;
  email: string;
}

const initialState: IUser = {
  name: "",
  pass: "",
  email: "",
};

const userSlice = createSlice({
  name: "userSchema",
  initialState: initialState,
  reducers: {
    setName: (userSchema, action) => {
      return {
        ...userSchema,
        name: action.payload,
      };
    },
    setPass: (userSchema, action) => {
      return {
        ...userSchema,
        pass: action.payload,
      };
    },
    setEmail: (userSchema, action) => {
      return {
        ...userSchema,
        email: action.payload,
      };
    },
  },
});

export const { setName, setPass, setEmail } = userSlice.actions;
export default userSlice.reducer;
