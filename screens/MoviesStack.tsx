import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesScreen from './MoviesScreen';
import MovieScreen from './MovieScreen';

const Stack = createStackNavigator();

const MoviesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={MoviesScreen} options={{headerShown:false}} />
      <Stack.Screen name="Movie" component={MovieScreen} options={{headerTitle:""}}/>
    </Stack.Navigator>
  );
};


export default MoviesStack;
