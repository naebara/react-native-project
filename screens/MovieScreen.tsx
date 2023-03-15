import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { Link, RouteProp, useRoute } from "@react-navigation/native";
import { IMovie } from "../types/movieType";
import { Ionicons } from "@expo/vector-icons";

type MovieScreenRouteProp = RouteProp<{ Movie: { movie: IMovie } }, "Movie">;

const MovieScreen = () => {
  const route = useRoute<MovieScreenRouteProp>();
  const { movie } = route.params;
  const { width } = Dimensions.get("window");
  const height = Math.round(width * 1.2);
  return (
    <>
      <View style={styles.container1}>
        <FlatList
          data={movie.Images}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ ...styles.image, width, height }}
              resizeMode="cover"
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{movie.Title}</Text>
          <Text style={styles.year}>{movie.Year}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Genre:</Text>
          <Text style={styles.value}>{movie.Genre}</Text>
          <Text style={styles.label}>Plot:</Text>
          <Text style={styles.value}>{movie.Plot}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="md-star" size={28} color="gold" />
            <Text style={styles.rating}>{movie.imdbRating}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "#FFF",
    marginBottom: 8,
    overflow: "hidden",
  },
  image: {
    marginRight: 16,
  },
  container: {
    pozition: "absolute",
    top: -70,
    backgroundColor: "#FFF",
    borderRadius: 8,
    margin: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  year: {
    fontSize: 18,
    color: "#666",
    alignSelf: "flex-end",
  },
  content: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default MovieScreen;
