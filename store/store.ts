/*
* Acest fișier exportă un store din Redux configurat utilizând funcția configureStore din @reduxjs/toolkit.
* store are un singur reducător, definit în fișierul reducer.
* Tipul stării rădăcinii este definit folosind ReturnType și getState pentru a obține tipul stării din store.



*/

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
