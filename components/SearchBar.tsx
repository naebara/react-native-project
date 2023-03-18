/*
*
* Acest cod definește componenta SearchBar, care este un câmp de căutare pentru filme.
* Componenta primește un query de căutare și o funcție pentru a actualiza acest query.
* Componenta utilizează biblioteca react-native-paper pentru a afișa un Searchbar și iconițe din pachetul
*  Ionicons pentru a adăuga o pictogramă de căutare și o pictogramă pentru a șterge query-ul.
*  Acestea pot fi utilizate pentru a căuta filme în funcție de query-ul introdus în componenta Searchbar.
*  Componenta este, de asemenea, stilizată cu un fundal gri și fontul de culoare neagră pentru a fi ușor de utilizat și vizualizat.
*/

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <View style={styles.searchBarContainer}>
      <Searchbar
        placeholder="Search movies..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        icon={() => (
          <Ionicons name="search" size={20} color="#555" style={styles.icon} />
        )}
        clearIcon={() =>
          searchQuery ? (
            <Ionicons
              name="close"
              size={20}
              color="#555"
              onPress={() => setSearchQuery("")}
              style={styles.icon}
            />
          ) : null
        }
        style={styles.searchBar}
        inputStyle={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "#f1f1f1",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  searchBar: {
    borderRadius: 20,
  },
  input: {
    fontSize: 16,
    color: "#555",
  },
  icon: {
    marginRight: 10,
  },
});

export default SearchBar;
