import React from 'react';

import { SmallFont } from '~theme/typography';
import { Colors } from '~theme/colors';
import { Artist, Track } from '~types';
import { Wrapper } from './styles';

interface TrackDisplayProps {
  track: Track;
}

function concatenateArtists(artists: Artist[], joinBy = ',') {
  return artists.map(({ name }) => name).join(joinBy);
}

export default function TrackDisplay({ track }: TrackDisplayProps) {
  const { name, artists } = track;
  return (
    <Wrapper>
      <SmallFont>{name}</SmallFont>
      <SmallFont color={Colors.Gray}>{concatenateArtists(artists)}</SmallFont>
    </Wrapper>
  );
}
