/**
 * Acesta este un ecran de înregistrare a utilizatorului (Sign Up Screen) în React Native.
 * Componenta definește patru câmpuri de introducere a datelor pentru nume, e-mail, parolă și confirmare de parolă,
 * și un buton pentru a trimite datele de înregistrare. Când utilizatorul introduce date noi în câmpuri,
 * acestea sunt stocate în variabile de stare și actualizate prin intermediul funcției useState().
 * Funcția handleSignUp() este apelată când utilizatorul apasă butonul "Sign Up" și ar trebui să trimită datele
 * de înregistrare către server. Stilurile pentru ecran și pentru fiecare element din formular sunt definite în obiectul
 * styles prin intermediul funcției StyleSheet.create().
 */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // handle sign up logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
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
