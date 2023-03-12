import { useEffect, useState } from "react";
import { getMovies } from "../../services/moviesService";
import { IMovie } from "../../types/movieType";

export const useMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, []);

  return {
    movies,
    isLoading,
    isError,
  };
};
