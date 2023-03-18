import React from 'react';

import { Artist } from '~types';
import ArtistCard from '../ArtistCard/ArtistCard';
import { ArtistList, Separator } from './styles';

interface ArtistListProps {
  data: Artist[];
  showRanking?: boolean;
  navigateToArtist: (artistId: string, artistName: string) => void;
}

export default function ArtistsList({
  data,
  navigateToArtist,
  showRanking = false,
}: ArtistListProps) {
  return (
    <ArtistList
      data={data}
      keyExtractor={(item: Artist) => item.id}
      ItemSeparatorComponent={Separator}
      showsHorizontalScrollIndicator={false}
      showRanking={showRanking}
      renderItem={({ item, index }) => (
        <ArtistCard
          imageURI={item.images[0].url}
          name={item.name}
          rank={showRanking ? index + 1 : undefined}
          onPress={() => navigateToArtist(item.id, item.name)}
        />
      )}
      horizontal
    />
  );
}
