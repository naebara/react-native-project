import axios from "axios";
import { IMovie } from "../types/movieType";

const axiosInstance = axios.create({
  baseURL:
    "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON",
});

export const getMovies = async () => {
  const { data } = await axiosInstance.get<IMovie[]>("");
  return data;
};

// export const getMovieById = async (id: number) => {
//   const { data } = await axiosInstance.get<IMovie>(`/movies/${id}`);
//   return data;
// };
