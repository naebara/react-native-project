import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { useMovies } from '../hooks/movies/useMovies';
import { useNavigation } from '@react-navigation/native';
import { IMovie } from '../types/movieType';

const MoviesScreen = () => {
  const { movies, isLoading, isError } = useMovies();
  const navigation = useNavigation();

  const handleMoviePress = (movie: IMovie) => {
    navigation.navigate('Movie', { movie });
  };

  const renderItem = ({ item }: { item: IMovie }) => {
    return (
      <TouchableOpacity style={styles.movieContainer} onPress={() => handleMoviePress(item)}>
        <View style={styles.imageContainer}>
          {item.image.startsWith('http') || item.image.startsWith('https') || item.image.startsWith('www') ?
            <Image source={{ uri: item.image }} style={styles.image} /> :
            <Text style={styles.icon}>No Image</Text>
          }
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.movie}</Text>
          <Text style={styles.rating}>Rating: {item.rating} ⭐️</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading && <Text style={styles.message}>Loading...</Text>}
      {isError && <Text style={styles.message}>An error occurred. Please try again later.</Text>}
      {!isLoading && movies &&
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
        />
      }
    </View>
  );
};

MoviesScreen.navigationOptions = {
    headerShown: false,
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  list: {
    width: '100%',
    paddingHorizontal: 20,
  },
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
  },
  imageContainer: {
    width: 100,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  icon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A0A0A0',
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
  },
});

export default MoviesScreen;
