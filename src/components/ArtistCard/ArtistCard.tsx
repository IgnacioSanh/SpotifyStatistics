import React from 'react';
import { NameContainer, Wrapper, RoundedImage, NumberOutline } from './styles';
import { SmallFont } from '~theme/typography';

interface ArtistCardProps {
  imageURI: string;
  name: string;
  rank?: number;
  onPress: () => void;
}

export default function ArtistCard({
  imageURI,
  name,
  rank,
  onPress,
}: ArtistCardProps) {
  return (
    <Wrapper withRank={Boolean(rank)} onPress={onPress}>
      {rank && <NumberOutline>{rank}</NumberOutline>}
      <RoundedImage source={{ uri: imageURI, width: 110, height: 110 }} />
      <NameContainer>
        <SmallFont>{name}</SmallFont>
      </NameContainer>
    </Wrapper>
  );
}
