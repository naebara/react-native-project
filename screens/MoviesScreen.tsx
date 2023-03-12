import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useMovies } from '../hooks/movies/useMovies';
import { useNavigation } from '@react-navigation/native';
import { IMovie } from '../types/movieType';

const MoviesScreen = () => {
  const { movies, isLoading, isError } = useMovies();
  const navigation = useNavigation();

  const handleMoviePress = (movie: IMovie) => {
    navigation.navigate('Movie', { movie });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Movies Screen</Text>
      {isLoading && <Text>Loading...</Text>}
      {isError && <Text>An error occurred. Please try again later.</Text>}
      {!isLoading && movies &&
        movies.map((movie) => {
          return (
            <TouchableOpacity key={movie.id} onPress={() => handleMoviePress(movie)}>
              <Text>{movie.movie}</Text>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};
export default MoviesScreen;
