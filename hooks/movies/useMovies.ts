/*
  * Acesta este un hook React personalizat numit useMovies care este folosit pentru a obține o listă de filme folosind un serviciu numit getMovies.
  Hook-ul întoarce trei variabile: movies, isLoading, și isError, care sunt utilizate pentru a gestiona starea de încărcare și eventualele erori ce pot apărea în timpul obținerii listei de filme.
  Funcția useEffect este folosită pentru a face un apel către serviciul getMovies în momentul încărcării
  * componentei și de a actualiza starea movies cu lista de filme întoarsă de serviciu.
* */
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
