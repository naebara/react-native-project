import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/authentication";
import { Button } from "react-native-elements";
import { store } from "../store/store";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(logOut());
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
