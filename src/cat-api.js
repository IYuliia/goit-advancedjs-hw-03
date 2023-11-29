import axios from 'axios';

const API_KEY =
  'live_Io4faX6h8wEC4EO7AIs6Kiq6ekje37Y3Lp4i3sJ2Kr15VnKy6tU5a2MTs7ywIkqQ';
axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => console.error('An error occurred:', error.message));
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return axios
    .get(url)
    .then(response => response.data[0])
    .catch(error => {
      console.error('An error occurred:', error.message);
    });
}
