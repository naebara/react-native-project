/*
* Acest fișier exportă un slice numit "userSlice" cu un initialState care conține numele, parola și adresa de
* email ale utilizatorului. Slice-ul conține reduceri care permit actualizarea acestor date, în mod particular
* "setName", "setPass" și "setEmail". Aceste reduceri utilizează o sintaxă de returnare a unui nou obiect cu
* datele actualizate folosind spread operator. Slice-ul este exportat pentru a putea fi combinat cu alte
* slice-uri folosind combineReducers() din Redux Toolkit.
*/

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
