import styled from 'styled-components/native';

import { Colors } from '~theme/colors';

import LinearGradient from 'react-native-linear-gradient';
import { Spacings } from '~theme/spacings';

const GRADIENT_COLORS = [Colors.Black, Colors.Black_soft];

export const Wrapper = styled(LinearGradient).attrs(
  ({ reverseGradient = true }: { reverseGradient?: boolean }) => ({
    colors: reverseGradient ? GRADIENT_COLORS.reverse() : GRADIENT_COLORS,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  }),
)`
  padding: ${Spacings.small}px;
`;
