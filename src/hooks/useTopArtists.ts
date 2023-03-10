import { useEffect, useState } from 'react';
import SpotifyService from '~services/SpotifyService';
import { TopArtist } from '~types';

export default function useTopArtists(
  limit: number = 20,
): [TopArtist[], boolean, () => Promise<void>] {
  const [artists, setArtists] = useState<TopArtist[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function refresh() {
    setIsLoading(true);
    setArtists(await SpotifyService.getTopArtists(limit));
    setIsLoading(false);
  }

  return [artists, isLoading, refresh];
}
