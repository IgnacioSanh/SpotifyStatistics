import React from 'react';
import { NameContainer, Wrapper, RoundedImage, NumberOutline } from './styles';
import { SmallFont } from '~theme/typography';
import { moderateScale } from '~utils/scaling';

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
    <Wrapper onPress={onPress}>
      {rank && <NumberOutline>{rank}</NumberOutline>}
      <RoundedImage
        source={{
          uri: imageURI,
          width: moderateScale(120),
          height: moderateScale(120),
        }}
      />
      <NameContainer>
        <SmallFont>{name}</SmallFont>
      </NameContainer>
    </Wrapper>
  );
}
