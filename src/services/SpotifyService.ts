import axios, { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import { SPOTIFY_API_BASE_URL } from '@env';
import {
  Artist,
  GetArtistTopTracksResponse,
  LimitParamRequest,
  GetTopArtistsResponse,
  GetTopTracksResponse,
  Track,
} from '~types';

async function getGenres() {
  const url = `${SPOTIFY_API_BASE_URL}/recommendations/available-genre-seeds`;
  const result = await axios.get(url);
  return result;
}

async function getTopArtists(limit: number) {
  const url = `${SPOTIFY_API_BASE_URL}/me/top/artists`;
  try {
    const { data } = await axios.get<
      GetTopArtistsResponse,
      AxiosResponse<GetTopArtistsResponse>,
      LimitParamRequest
    >(url, {
      params: { limit },
    });
    return data.items;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log('Axios error', error as AxiosError);
    } else {
      console.log('UNKOWN ERROR', error);
    }
  }
}

async function getUserTopTracks(limit: number) {
  const url = `${SPOTIFY_API_BASE_URL}/me/top/tracks`;
  try {
    const { data } = await axios.get<
      GetTopTracksResponse,
      AxiosResponse<GetTopTracksResponse>,
      LimitParamRequest
    >(url, { params: { limit } });
    return data.items;
  } catch (error) {
    console.log(error);
  }
}

async function getArtist(artistId: string) {
  const url = `${SPOTIFY_API_BASE_URL}/artists/${artistId}`;
  const { data } = await axios.get<Artist, AxiosResponse<Artist>, undefined>(
    url,
  );
  return data;
}

async function artistTopTracks(artistId: string): Promise<Track[]> {
  const url = `${SPOTIFY_API_BASE_URL}/artists/${artistId}/top-tracks?market=ES`;
  const {
    data: { tracks },
  } = await axios.get<
    GetArtistTopTracksResponse,
    AxiosResponse<GetArtistTopTracksResponse>,
    undefined
  >(url);
  return tracks;
}

export default {
  getGenres,
  getTopArtists,
  getArtist,
  artistTopTracks,
  getUserTopTracks,
};
