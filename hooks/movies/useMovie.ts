import { useEffect, useState } from "react";
import { getMovieById, getMovies } from "../../services/moviesService";
import { IMovie } from "../../types/movieType";

export const useMovie = (id: number) => {
  const [movie, setMovie] = useState<IMovie>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await getMovieById(id);
        setMovie(data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, []);

  return {
    movie,
    isLoading,
    isError,
  };
};
