import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Artist, HomeNavigatorParamList, ScreenNames, Track } from '~types';
import { Screen, BackButton, TrackDisplay } from '~components';
import SpotifyService from '~services/SpotifyService';
import { StandardBoldFont } from '~theme';

import { BandName, Comma, GenreLink, Image, Wrapper } from './styles';

type ArtistDetailProps = NativeStackScreenProps<
  HomeNavigatorParamList,
  ScreenNames.ARTIST_DETAIL
>;

function itemSeparatorComponent() {
  return <Comma>,</Comma>;
}

export default function ArtistDetail({ route }: ArtistDetailProps) {
  const [artistData, setArtistData] = useState<Artist>();
  const [topTracks, setTopTracks] = useState<Track[]>();

  const artistId = route.params.id;

  useEffect(() => {
    SpotifyService.getArtist(artistId).then(setArtistData);
    SpotifyService.artistTopTracks(artistId).then(setTopTracks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Screen noSideMargin noVerticalMargin>
      <BackButton />
      {artistData ? (
        <>
          <View>
            <BandName>{artistData.name}</BandName>
            <Image url={artistData.images[0].url} />
          </View>
          <Wrapper>
            <StandardBoldFont>Genres</StandardBoldFont>
            <FlatList
              data={artistData.genres}
              renderItem={({ item }) => <GenreLink>{item}</GenreLink>}
              ItemSeparatorComponent={itemSeparatorComponent}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </Wrapper>
        </>
      ) : (
        <ActivityIndicator />
      )}
      {topTracks
        ? topTracks.map(track => <TrackDisplay key={track.id} track={track} />)
        : null}
    </Screen>
  );
}
