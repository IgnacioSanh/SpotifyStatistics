import styled from 'styled-components/native';

import { ImageProps } from 'react-native';

import { Colors } from '~theme/colors';

import LinearGradient from 'react-native-linear-gradient';
import { Spacings } from '~theme/spacings';
import { moderateScale } from '~utils/scaling';

const GRADIENT_COLORS = [Colors.Black_soft, Colors.Black];

const componentHeight = moderateScale(60);

export const Wrapper = styled(LinearGradient).attrs({
  colors: GRADIENT_COLORS,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${Spacings.small}px;
  height: ${componentHeight}px;
`;

export const TrackDescription = styled.View`
  padding: ${Spacings.small}px;
`;

interface BorderedImageProps extends ImageProps {
  url: string;
}

export const Image = styled.Image.attrs(({ url }: BorderedImageProps) => ({
  source: { uri: url, width: componentHeight, height: componentHeight },
  resizeMethod: 'auto',
  resizeMode: 'contain',
}))<BorderedImageProps>``;
