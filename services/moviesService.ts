/*Acest cod definește o funcție numită getMovies care folosește biblioteca Axios pentru a face o cerere GET la o adresă U
RL care conține informații despre filme sub forma unui fișier JSON. În cadrul acestei cereri, este utilizat un
obiect Axios pentru a seta adresa de bază a URL-ului și a face apoi cererea la adresa specificată.
Funcția returnează datele despre filme sub forma unui vector de obiecte de tipul IMovie.*/

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
