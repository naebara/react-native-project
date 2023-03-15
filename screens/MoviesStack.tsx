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
