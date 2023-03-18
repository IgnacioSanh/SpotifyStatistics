import styled from 'styled-components/native';

import { FlatList, FlatListProps } from 'react-native';

import { Artist } from '~types';
import { Spacings } from '~theme/spacings';

export const Separator = styled.View`
  height: ${Spacings.medium}px;
  width: ${Spacings.medium}px;
`;

interface ArtistListProps extends FlatListProps<Artist> {
  showRanking?: boolean;
}

export const ArtistList = styled(FlatList as new () => FlatList<Artist>).attrs(
  ({ showRanking }: ArtistListProps) => ({
    contentContainerStyle: {
      maxHeight: 130,
      paddingLeft: showRanking ? 30 : 0,
    },
  }),
)<ArtistListProps>`
  margin-top: ${Spacings.small}px;
`;
