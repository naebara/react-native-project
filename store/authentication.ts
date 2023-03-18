/*Acesta este un fragment de cod care definește un slice din store-ul Redux pentru autentificarea utilizatorului într-o aplicație. Slice-ul definește un obiect cu două proprietăți: loggedIn, care este inițializat cu false și este actualizat la true sau false în funcție de acțiunea de autentificare sau deconectare.

Folosind createSlice, se definește un obiect numit autenticationSlice care conține trei proprietăți: name, initialState și reducers. Numele slice-ului este autenticationSchema, iar starea inițială a acesteia este setată la obiectul IAutentication, care conține proprietatea loggedIn.

Reducerii definește două acțiuni: logIn și logOut, fiecare dintre acestea returnând un obiect cu o proprietate loggedIn actualizată. Acțiunea logIn setează loggedIn pe true, indicând că utilizatorul s-a autentificat cu succes, în timp ce acțiunea logOut setează loggedIn pe false, indicând că utilizatorul s-a deconectat cu succes.

La final, se exportă acțiunile logIn și logOut, precum și reducer-ul slice-ului autenticationSlice. Acestea pot fi utilizate în alte părți ale aplicației pentru a actualiza starea autentificării utilizatorului și pentru a afișa sau ascunde anumite componente ale interfeței grafice în funcție de starea autentificării*/

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
