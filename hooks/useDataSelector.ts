/*
* Acest cod exportă o funcție și o metodă care ajută la selectarea informațiilor despre utilizatori din store-ul
* Redux folosind Hook-ul useSelector. Funcția useDataSelector accesează state-ul din store-ul Redux și returnează
* informațiile despre utilizator. Funcția selectAutenticationSuccess utilizează aceste informații și folosește
* metoda useUserSelector pentru a accesa informațiile utilizatorului autentificat și a verifica dacă acesta se
* potrivește cu oricare dintre utilizatorii din store-ul Redux. Dacă se potrivește, metoda va returna adevărat,
*  altfel va returna fals. Acestea sunt funcții esențiale pentru gestionarea autentificării utilizatorilor
* în aplicația React Native.*/

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
