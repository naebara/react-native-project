/*
* Acesta este un fișier care exportă un slice dintr-un reducer al storeului de date (store) în Redux,
* care se numește dataSchema. Slice-ul conține o definiție a stării inițiale și o definiție a reducer-ului pentru
*  a actualiza starea. Starea inițială conține un singur obiect numit "users" cu o valoare predefinită dintr-un
* fișier numit "utils". Reducer-ul definește o funcție numită "addUser" care primește două argumente:
* primul este starea actuală, iar cel de-al doilea este un obiect numit "payload".
* Funcția "addUser" actualizează starea din storeului de date prin crearea unei copii a obiectului "users" și
* adăugarea obiectului "payload" în copie. Apoi, reducer-ul returnează o copie actualizată a stării inițiale,
* care include noul obiect adăugat. Această funcție "addUser" poate fi apoi utilizată pentru a adăuga un nou
* utilizator în storeul de date.
*/

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
