import styled from 'styled-components/native';
import { Colors } from '~theme/colors';
import { Spacings } from '~theme/spacings';
import { windowWidth } from '~theme/layout';

export const BandName = styled.Text`
  position: absolute;
  bottom: ${Spacings.extraSmall}px;
  opacity: 1;
  color: ${Colors.White};
  font-weight: 600;
  font-size: 40px;
  z-index: 4;
  align-self: center;
`;

export const Image = styled.Image.attrs(({ url }: { url: string }) => ({
  source: {
    uri: url,
    width: windowWidth,
    height: 200,
  },
}))<{ url: string }>`
  opacity: 0.5;
`;

export const GenreLink = styled.Text`
  color: ${Colors.White};
  text-decoration-line: underline;
`;

export const Comma = styled.Text`
  color: ${Colors.White};
  margin-right: ${Spacings.extraSmall}px;
`;

export const Wrapper = styled.View`
  padding: ${Spacings.large}px;
  gap: ${Spacings.extraSmall}px;
`;
