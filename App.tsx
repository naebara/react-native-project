import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import MoviesStack from "./screens/MoviesStack";
import ContactScreen from "./screens/ContactScreen";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const App = () => {
  const statusBarHeight = StatusBar.currentHeight;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            height: statusBarHeight,
          },
        }}
        tabBarOptions={{
          activeTintColor: "#ff6347",
          inactiveTintColor: "gray",
        }}
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
  );
};

export default App;
