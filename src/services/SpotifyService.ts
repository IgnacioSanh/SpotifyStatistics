import axios, { AxiosResponse } from 'axios';
import { SPOTIFY_API_BASE_URL } from '@env';
import { GetTopArtistsRequest, GetTopArtistsResponse } from '~types';

async function getGenres() {
  const url = `${SPOTIFY_API_BASE_URL}/recommendations/available-genre-seeds`;
  const result = await axios.get(url);
  console.log(result);
}

async function getTopArtists(limit: number) {
  const url = `${SPOTIFY_API_BASE_URL}/me/top/artists`;
  const { data } = await axios.get<
    GetTopArtistsResponse,
    AxiosResponse<GetTopArtistsResponse>,
    GetTopArtistsRequest
  >(url, {
    params: { limit },
  });
  return data.items;
}

export default {
  getGenres,
  getTopArtists,
};
