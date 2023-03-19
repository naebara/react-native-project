/*Acest cod definește o componentă React numită Authentication, care utilizează
NavigationContainer și createBottomTabNavigator din biblioteca React Navigation.
Acesta definește două ecrane pentru autentificare, LogIn și SignUp, utilizând Tab.Screen.
 În plus, ambele ecrane au o pictogramă asociată lor în bara de navigare prin utilizarea componente
  Ionicons din biblioteca Expo vector-icons */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogInScreen from "../screens/LogInScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Authentication = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "log-in" : "log-in-outline"}
                size={size}
                color={color}
              />
            ),
          }}
          name="LogIn"
          component={LogInScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Authentication;
