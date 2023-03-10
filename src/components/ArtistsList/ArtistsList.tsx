import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

import { TopArtist } from '~types';
import ArtistCard from '../ArtistCard/ArtistCard';
import { ArtistList } from './styles';

interface ArtistListProps {
  data: TopArtist[];
  showRanking?: boolean;
}

export default function ArtistsList({
  data,
  showRanking = false,
}: ArtistListProps) {
  // const renderItem: ListRenderItem<TopArtist> = ({ item, index }) => (
  //   <ArtistCard
  //     imageURI={item.images[0].url}
  //     name={item.name}
  //     rank={index + 1}
  //   />
  // );

  // return (
  //   <ArtistList
  //     data={data}
  //     keyExtractor={(item: TopArtist) => item.id}
  //     renderItem={renderItem}
  //     horizontal
  //   />
  // );

  return (
    <FlatList
      data={data}
      contentContainerStyle={{ maxHeight: 130 }}
      keyExtractor={item => item.id}
      style={{ paddingLeft: showRanking ? 30 : 0, marginTop: 20 }}
      ItemSeparatorComponent={() => <View style={{ height: 10, width: 10 }} />}
      horizontal
      renderItem={({ item, index }) => (
        <ArtistCard
          imageURI={item.images[0].url}
          name={item.name}
          rank={showRanking ? index + 1 : undefined}
        />
      )}
    />
  );
}
