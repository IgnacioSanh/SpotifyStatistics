import React from 'react';
import { NameContainer, Wrapper, RoundedImage, NumberOutline } from './styles';
import { SmallFont } from '~theme/typography';
import { useNavigation } from '@react-navigation/native';

interface ArtistCardProps {
  id: string;
  imageURI: string;
  name: string;
  rank?: number;
}

export default function ArtistCard({
  imageURI,
  name,
  rank,
  id,
}: ArtistCardProps) {
  // const { navigate } = useNavigation();

  return (
    <Wrapper withRank={Boolean(rank)}>
      {rank && <NumberOutline>{rank}</NumberOutline>}
      <RoundedImage source={{ uri: imageURI, width: 110, height: 110 }} />
      <NameContainer>
        <SmallFont>{name}</SmallFont>
      </NameContainer>
    </Wrapper>
  );
}
