import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesScreen from './MoviesScreen';
import MovieScreen from './MovieScreen';

const Stack = createStackNavigator();

const MoviesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={MoviesScreen} />
      <Stack.Screen name="Movie" component={MovieScreen} />
    </Stack.Navigator>
  );
};

export default MoviesStack;
