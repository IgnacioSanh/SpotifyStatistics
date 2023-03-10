import styled from 'styled-components/native';

import { FlatList } from 'react-native';

import { TopArtist } from '~types';
import { Spacings } from '~theme/spacings';

export const Separator = styled.View`
  height: ${Spacings.medium}px;
  width: ${Spacings.medium}px;
`;

export const ArtistList = styled(FlatList as new () => FlatList<TopArtist>)`
  padding-left: 30px;
`;
