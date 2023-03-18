/**
 * Acest fișier exportă o componentă funcțională numită MoviesScreen, care afișează o listă de filme utilizând
 * obiectul FlatList din React Native. Componenta utilizează hook-ul personalizat useMovies() pentru a obține lista de filme
 * și informațiile de stare asociate cu aceasta (isLoading și isError). Funcția handleMoviePress() este apelată când un utilizator
 * apasă pe o carte de film din listă, navigând utilizatorul la ecranul detaliilor filmului. Opțiunea headerShown este setată la
 * false pentru a ascunde bara de navigare în ecranul de listă de filme.
 */


import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { useMovies } from "../hooks/movies/useMovies";
import { useNavigation } from "@react-navigation/native";
import { IMovie } from "../types/movieType";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width - 40;
const ITEM_HEIGHT = ITEM_WIDTH / 3;

const MoviesScreen = () => {
  const { movies, isLoading, isError } = useMovies();
  const navigation = useNavigation();

  const handleMoviePress = (movie: IMovie) => {
    navigation.navigate("Movie", { movie });
  };

  const renderItem = ({ item }: { item: IMovie }) => {
    return (
      <TouchableOpacity
        style={styles.movieContainer}
        onPress={() => handleMoviePress(item)}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.Images[0] }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.Title}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{item.imdbRating} ⭐️</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading && <Text style={styles.message}>Loading...</Text>}
      {isError && (
        <Text style={styles.message}>
          An error occurred. Please try again later.
        </Text>
      )}
      {!isLoading && movies && (
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={(item) => item.Title + item.Year}
          style={styles.list}
        />
      )}
    </View>
  );
};

MoviesScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  list: {
    width: "100%",
    paddingHorizontal: 20,
  },
  movieContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    overflow: "hidden",
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
  imageContainer: {
    width: ITEM_WIDTH * 0.4,
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  ratingContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#A0A0A0",
  },
});

export default MoviesScreen;
