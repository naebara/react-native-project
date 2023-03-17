import { createSlice } from "@reduxjs/toolkit";
import { users } from "../utils";
import { IUser } from "./user";

export interface IData {
  users: IUser[];
}

const initialState: IData = {
  users: users,
};

const dataSlice = createSlice({
  name: "dataSchema",
  initialState: initialState,
  reducers: {
    addUser: (dataSchema, action) => {
      const updatedUsers = [...dataSchema.users];
      updatedUsers.push(action.payload);
      return {
        ...dataSchema,
        users: updatedUsers,
      };
    },
  },
});

export const { addUser } = dataSlice.actions;
export default dataSlice.reducer;
