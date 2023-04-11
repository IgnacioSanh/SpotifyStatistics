import { useEffect, useState } from 'react';
import SpotifyService from '~services/SpotifyService';
import { Track } from '~types';

export default function useTopArtists(
  limit: number = 20,
): [Track[], boolean, () => Promise<void>] {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function refresh() {
    setIsLoading(true);
    setTracks((await SpotifyService.getUserTopTracks(limit)) || []);
    setIsLoading(false);
  }

  return [tracks, isLoading, refresh];
}
