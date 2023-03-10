export interface ImageProp {
  url: string;
  height: number;
  width: number;
}

export interface TopArtist {
  genres: string[];
  id: string;
  images: ImageProp[];
  name: string;
  popularity: string;
  uri: string;
}

export interface GetTopArtistsResponse {
  items: TopArtist[];
}

export interface GetTopArtistsRequest {
  limit: number;
}
