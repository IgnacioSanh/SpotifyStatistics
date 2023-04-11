import React from 'react';
import { TouchableHighlight, View } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify';
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons/faClockRotateLeft';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Screen, Pill, ArtistsList, TrackDisplay } from '~components';
import { Colors } from '~theme/colors';
import { H1, StandardBoldFont } from '~theme/typography';
import { useAuthContext } from '~store/AuthProvider';
import { useTopArtists, useTopTracks } from '~hooks';
import {
  HomeNavigatorParamList,
  MainNavigatorParamList,
  ScreenNames,
} from '~types';
import { Categories, Row, RowBottom, RowSpacing } from './styles';

type HomeProps = CompositeScreenProps<
  BottomTabScreenProps<HomeNavigatorParamList, ScreenNames.HOME>,
  NativeStackScreenProps<MainNavigatorParamList>
>;

export default function Home({ navigation }: HomeProps) {
  const [topArtists] = useTopArtists(5);
  const [topTracks] = useTopTracks(5);
  const { logout } = useAuthContext();

  return (
    <Screen scrollable>
      <Row>
        <Row>
          <FontAwesomeIcon icon={faSpotify} color={Colors.Green} size={24} />
          <H1 color={Colors.Green}>Hello Ignacio!</H1>
        </Row>
        <Row>
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            color={Colors.White}
            size={16}
          />
          <FontAwesomeIcon icon={faUser} color={Colors.White} size={16} />
          <TouchableHighlight onPress={logout}>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              color={Colors.White}
              size={16}
            />
          </TouchableHighlight>
        </Row>
      </Row>
      <Categories>
        <Pill title="Music" />
        <Pill title="Podcast" />
        <Pill title="Programs" />
      </Categories>
      <RowBottom>
        <H1>Your top 5 artists</H1>
        <StandardBoldFont color={Colors.Green}>See More</StandardBoldFont>
      </RowBottom>
      <View>
        <ArtistsList
          data={topArtists}
          navigateToArtist={(artistId: string, artistName: string) =>
            navigation.navigate(ScreenNames.ARTIST_DETAIL, {
              id: artistId,
              artistName,
            })
          }
          showRanking
        />
        <RowSpacing>
          <H1>Your top 5 songs</H1>
          <StandardBoldFont color={Colors.Green}>See More</StandardBoldFont>
        </RowSpacing>
        {topTracks.map(track => (
          <TrackDisplay key={track.id} track={track} />
        ))}
      </View>
    </Screen>
  );
}
