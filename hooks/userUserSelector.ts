/*
* Acest cod definește trei funcții utilitare care permit accesul la diferite proprietăți ale stării
* utilizatorului din Redux. Prima funcție, useUserSelector, este un hook personalizat care returnează întreaga stare a
* utilizatorului din biblioteca, prin utilizarea useSelector, un hook din biblioteca react-redux.
* A doua, a treia și a patra funcții, selectUserName, selectUserPass și selectUserEmail,
*  sunt selecționere care returnează numele, parola și adresa de email ale utilizatorului, respectiv.
* Toate aceste funcții iau starea ( inforatiile)  ca argument și utilizează tipul de rădăcină definit în
* RootState pentru a asigura tipurile corecte pentru proprietățile returnate.
* Prin utilizarea acestor funcții, se poate accesa starea utilizatorului și anumite proprietăți ale sale din
* orice componentă a React care este conectată la  Redux.*/

import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useUserSelector = () => {
  const state = useSelector((state: RootState) => state.entities.user);
  return state;
};

export const selectUserName = (state: RootState) => state.entities.user.name;

export const selectUserPass = (state: RootState) => state.entities.user.pass;

export const selectUserEmail = (state: RootState) => state.entities.user.email;
