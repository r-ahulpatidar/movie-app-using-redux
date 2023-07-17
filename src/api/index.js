import { API_URL, IMG_PATH, SEARCH_API } from '../config';

export const getMovies = async () => {
  const response = await fetch(`${API_URL}`);
  return await response.json();
};

export const searchMovie = async (searchValue) => {
  const response = await fetch(`${SEARCH_API}${searchValue}`);
  return await response.json();
};

export const getImagePath = (posterPath) => {
  return IMG_PATH + posterPath;
};

export const getClassByRate = (vote) => {
  if (vote >= 8) {
    return 'text-green-500';
  } else if (vote >= 5) {
    return 'text-orange-500';
  } else {
    return 'text-red-500';
  }
};
