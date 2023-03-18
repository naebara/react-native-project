/*
* Acest cod definește un selector Redux pentru obiectul de stare authentication din  Redux.
* Folosind funcția useSelector din pachetul React-Redux, obținem starea curentă din  Redux și o returnăm
*  prin intermediul funcției useAuthenticationSelector.
*  Această funcție poate fi apoi importată și utilizată în alte componente React pentru a obține date din  Redux.
*  De exemplu, dacă avem nevoie de proprietatea isAuthenticated din obiectul authentication, putem apela funcția
* useAuthenticationSelector pentru a obține starea curentă și apoi accesa proprietatea isAuthenticated.*/

import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useAuthenticationSelector = () => {
  const state = useSelector(
    (state: RootState) => state.entities.authentication
  );
  return state;
};
