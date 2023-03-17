import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";
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
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person-add" : "person-add-outline"}
                size={size}
                color={color}
              />
            ),
          }}
          name="SignUp"
          component={SignUpScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Authentication;
