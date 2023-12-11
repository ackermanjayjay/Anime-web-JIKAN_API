import axios from "axios";
const url = import.meta.env.VITE_API_JIKAN_API;

export const getAnime = async () => {
  const anime = await axios.get(`${url}/top/anime`);
  return anime.data.data;
};

export const SearchAnime= async (q) => {
  const search = await axios.get(`${url}/anime?q=${q}&?limit=${15}`);
  // const search = await axios.get(q);
  return search.data.data;
};
