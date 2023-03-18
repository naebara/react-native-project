/*
* Acest cod reprezintă componenta principală a navigației aplicației. Folosește o bară de navigație în partea de jos a ecranului, care permite accesul la diferite pagini ale aplicației prin intermediul unor butoane. Aceste butoane sunt reprezentate de instanțe ale componentei create cu createBottomTabNavigator și sunt adăugate într-un Tab.Navigator.

Componenta Tab.Navigator definește opțiunile și ecranele disponibile pentru navigare. Fiecare tab conține un Tab.Screen care definește ecranul și opțiunile asociate cu acesta, cum ar fi iconița și numele afișat pe butonul de navigare.

În plus, componenta MainNavigation încapsulează în sine toate ecranele aplicației și oferă un NavigationContainer pentru a ajuta la gestionarea stării de navigare a aplicației. De asemenea, include și StatusBar.currentHeight pentru a ajusta înălțimea barei de navigare în funcție de înălțimea status bar-ului din dispozitiv.
*
* */


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
