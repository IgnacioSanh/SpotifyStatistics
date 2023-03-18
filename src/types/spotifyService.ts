export interface ImageProp {
  url: string;
  height: number;
  width: number;
}

export interface Artist {
  genres: string[];
  id: string;
  images: ImageProp[];
  name: string;
  popularity: string;
  uri: string;
}

export interface Album {
  id: string;
  images: ImageProp[];
  name: string;
  release_date: string;
  genres: string[];
  label: string;
}

export interface Track {
  id: string;
  album: Album;
  artists: Artist[];
  duration_ms: number;
  explicit: boolean;
  name: string;
}

export interface GetTopArtistsResponse {
  items: Artist[];
}

export interface GetTopArtistsRequest {
  limit: number;
}

export interface GetArtistTopTracksResponse {
  tracks: Track[];
}
