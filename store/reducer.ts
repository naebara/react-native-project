/*
* Acesta este un fișier care exportă un reducer pentru combinarea altor reduceri într-un singur reducer
* utilizat în aplicațiile construite cu biblioteca Redux. Este folosit în mod obișnuit pentru a combina reduceri
* diferiți și a crea o structură de stocare pentru date în aplicații mai complexe. În particular,
* acesta definește reducerul principal pentru entități, folosind combineReducers din Redux.
*
* */

import { combineReducers } from "redux";
import entitiesReducer from "./entities";
export default combineReducers({
  entities: entitiesReducer,
});
