/**
 * Acest fișier exportă o componentă funcțională numită LoginScreen, care permite utilizatorului să introducă adresa de email și parola pentru autentificarea în aplicație.
 * Componenta utilizează hook-urile useState, useRef, useEffect și useDispatch din React și utilizează obiectele TextInput și TouchableOpacity pentru intrarea de date și pentru butonul de autentificare.
 * De asemenea, componenta folosește hook-ul useDataSelector și acțiunile setEmail, setPass și logIn din Redux pentru a gestiona autentificarea utilizatorului și a oferi feedback vizual prin intermediul unei animații.
 */

import React, {useEffect, useRef, useState} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated
} from "react-native";
import { useDispatch } from "react-redux";
import { logIn } from "../store/authentication";
import { setEmail, setPass } from "../store/user";
import { useDataSelector } from "../hooks/useDataSelector";


export default function LoginScreen() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const data = useDataSelector();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    setTimeout(() => fadeIn(), 500);
  }, []);

  const handleLogin = () => {
    dispatch(setEmail(mail));
    dispatch(setPass(password));

    const user = data.users.find(
      (user) => user.email === mail && user.pass === password
    );

    if (user) {
      dispatch(logIn());
    } else {
      console.log("FAILED!");
    }
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={mail}
        onChangeText={setMail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Animated.View
          style={[
            styles.fadingContainer,
            {
              // Bind opacity to animated value
              opacity: fadeAnim,
            },
            { width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }
          ]}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
  },
  input: {
    width: "80%",
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    width: "80%",
    height: 48,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
