import React from 'react';

import { SmallFont } from '~theme/typography';
import { Colors } from '~theme/colors';
import { Artist, Track } from '~types';
import TimeUtil from '~utils/timeUtil';

import { Wrapper, TrackDescription, Image } from './styles';
interface TrackDisplayProps {
  track: Track;
}

function concatenateArtists(artists: Artist[], joinBy = ',') {
  return artists.map(({ name }) => name).join(joinBy);
}

export default function TrackDisplay({
  track: { name, artists, album, duration_ms },
}: TrackDisplayProps) {
  return (
    <Wrapper>
      <Image url={album.images[0].url} />
      <TrackDescription>
        <SmallFont>{name}</SmallFont>
        <SmallFont color={Colors.Gray}>{concatenateArtists(artists)}</SmallFont>
        <SmallFont color={Colors.Gray}>
          {TimeUtil.formatMs(duration_ms)}
        </SmallFont>
      </TrackDescription>
    </Wrapper>
  );
}
