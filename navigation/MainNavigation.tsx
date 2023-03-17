import React from "react";
import { StatusBar } from "react-native";
import { ContactProvider } from "../context/ContactContext";
import ContactScreen from "../screens/ContactScreen";
import HomeScreen from "../screens/HomeScreen";
import MoviesStack from "../screens/MoviesStack";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
  const statusBarHeight = StatusBar.currentHeight;

  return (
    <ContactProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              height: statusBarHeight,
            },
          }}
          //   tabBarOptions={{
          //     activeTintColor: "#ff6347",
          //     inactiveTintColor: "gray",
          //   }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Movies"
            component={MoviesStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons
                  name={focused ? "film" : "film-outline"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Contact"
            component={ContactScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons
                  name={focused ? "chatbubbles" : "chatbubbles-outline"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ContactProvider>
  );
}
