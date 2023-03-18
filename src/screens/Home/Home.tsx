import React from 'react';
import { TouchableHighlight, View } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify';
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket';

import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons/faClockRotateLeft';

import { Screen, Pill, ArtistsList } from '~components';
import { Colors } from '~theme/colors';
import { H1, StandardBoldFont } from '~theme/typography';
import { Categories, Row, RowBottom } from './styles';
import { useAuthContext } from '~store/AuthProvider';
import { useTopArtists } from '~hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeNavigatorParamList, ScreenNames } from '~types';

type HomeProps = NativeStackScreenProps<
  HomeNavigatorParamList,
  ScreenNames.HOME
>;

export default function Home({ navigation }: HomeProps) {
  const [topArtists] = useTopArtists(5);
  const { logout } = useAuthContext();

  return (
    <Screen>
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
        <H1>Your top Albums</H1>
      </View>
    </Screen>
  );
}
