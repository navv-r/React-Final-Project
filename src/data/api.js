const apiKey = "c2e6bd24";
const baseUrl = "https://www.omdbapi.com/";

export const searchMovies = async (query) => {

  const response = await fetch(`${baseUrl}?apikey=${apiKey}&s=${query}`);

  const data = await response.json();

  return data.Search || [];

};

export const getMovie = async (id) => {

  const response = await fetch(`${baseUrl}?apikey=${apiKey}&i=${id}`);

  const data = await response.json();

  return data;

};