import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { useMovies } from "../hooks/movies/useMovies";
import { IMovie } from "../types/movieType";

const { width } = Dimensions.get("window");

const NUM_COLUMNS = 2;
const ITEM_MARGIN = 10;
const ITEM_WIDTH = (width - ITEM_MARGIN * (NUM_COLUMNS + 1)) / NUM_COLUMNS;
const ITEM_HEIGHT = ITEM_WIDTH * 1.5;

export default function HomeScreen() {
  const { movies, isLoading, isError } = useMovies();
  const [searchQuery, setSearchQuery] = useState("");

  const renderMovie = ({ item }: { item: IMovie }) => {
    return (
      <View style={styles.movieContainer}>
        <Image style={styles.poster} source={{ uri: item.Images[0] }} />
        <View style={styles.detailsContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.Title}</Text>
            <Text style={styles.info}>{item.Year}</Text>
            <Text style={styles.info}>{item.Runtime}</Text>
            <Text style={styles.info}>{item.Genre}</Text>
          </View>
        </View>
      </View>
    );
  };

  const filterMovies = (movies: IMovie[], searchQuery: string) => {
    return movies.filter((movie) => {
      return movie.Title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };

  const filteredMovies = filterMovies(movies ?? [], searchQuery);

  return (
    <>
      <View style={styles.container}>
        {isLoading && <Text>Loading...</Text>}
        {isError && <Text>An error occurred. Please try again later.</Text>}
        {!isLoading && filteredMovies && (
          <>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <FlatList
              data={filteredMovies}
              renderItem={renderMovie}
              keyExtractor={(item) => item.imdbID}
              numColumns={NUM_COLUMNS}
              contentContainerStyle={styles.contentContainer}
            />
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  contentContainer: {
    alignItems: "flex-start",
    paddingBottom: ITEM_MARGIN,
  },

  movieContainer: {
    width: ITEM_WIDTH,
    margin: ITEM_MARGIN,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  poster: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
  detailsContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,

    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: "#fff", // add color property
  },
  info: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 2,
    color: "#fff", // add color property
  },
  searchBarContainer: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: "#eee",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});
