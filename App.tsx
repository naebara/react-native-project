import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import MoviesScreen from "./screens/MoviesScreen";
import ContactScreen from "./screens/ContactScreen";

const Tab = createBottomTabNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Movies" component={MoviesScreen} />
                <Tab.Screen name="Contact" component={ContactScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
