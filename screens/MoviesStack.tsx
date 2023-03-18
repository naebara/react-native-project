/**
 * Acest fișier exportă un navigator de ecrane pentru afișarea listei de filme și a detaliilor despre un film.
 * Navigatorul este creat utilizând biblioteca React Navigation și constă din două ecrane: MoviesScreen și MovieScreen.
 * Opțiunea headerStyle este definită pentru a ajusta înălțimea barei de navigare a ecranului, bazată pe înălțimea
 * actuală a barii de stare (status bar) a dispozitivului. Prima componentă, MoviesScreen, afișează o listă de filme,
 * în timp ce a doua componentă, MovieScreen, afișează detaliile despre un singur film. Opțiunea headerShown este
 * setată la false pentru a ascunde bara de navigare în componenta MovieScreen.
 */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MoviesScreen from "./MoviesScreen";
import MovieScreen from "./MovieScreen";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

const MoviesStack = () => {
  const statusBarHeight = StatusBar.currentHeight;
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: statusBarHeight,
        },
      }}
    >
      <Stack.Screen name="MoviesList" component={MoviesScreen} />
      <Stack.Screen
        name="Movie"
        component={MovieScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MoviesStack;
