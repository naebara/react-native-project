import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { Link, RouteProp, useRoute } from '@react-navigation/native';
import { IMovie } from '../types/movieType';
import { Ionicons } from '@expo/vector-icons';

type MovieScreenRouteProp = RouteProp<{ Movie: { movie: IMovie } }, 'Movie'>;

const MovieScreen = () => {
  const route = useRoute<MovieScreenRouteProp>();
  const { movie } = route.params;

  const handleIMDBPress = () => {
    Linking.openURL(movie.imdb_url);
  };

  const ratingStars = Array(Math.round(movie.rating)).fill('star');

  const displayImage = () => {
    if (movie.image.startsWith('http') || movie.image.startsWith('www')) {
      return <Image source={{ uri: movie.image }} style={styles.image} />;
    } else {
      return (
        <View style={styles.iconContainer}>
          <Ionicons name="image-outline" size={80} color="black" />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>{displayImage()}</View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title}>{movie.movie}</Text>
          <Text style={styles.ratingText}>
            Rating: {movie.rating} {ratingStars.map((star, index) => <Ionicons key={index} name="star" size={18} color="#FFB900" />)}
          </Text>
        </View>
        <TouchableOpacity style={styles.imdbButton} onPress={handleIMDBPress}>
          <Text style={styles.imdbButtonText}>IMDB</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imdbButton: {
    backgroundColor: '#0077FF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  imdbButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: 300,
    backgroundColor: '#eee',
  },
});

export default MovieScreen;
