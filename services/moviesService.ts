import axios from "axios";
import { IMovie } from "../types/movieType";

const axiosInstance = axios.create({
  baseURL: "https://dummyapi.online/api/",
});

export const getMovies = async () => {
  const { data } = await axiosInstance.get<IMovie[]>("/movies");
  return data;
};

export const getMovieById = async (id: number) => {
  const { data } = await axiosInstance.get<IMovie>(`/movies/${id}`);
  return data;
};
