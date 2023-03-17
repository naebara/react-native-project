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
