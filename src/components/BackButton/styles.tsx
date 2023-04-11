import styled from 'styled-components/native';
import { Colors } from '~theme/colors';
import { BorderRadius, Spacings } from '~theme/spacings';

export const Circle = styled.TouchableHighlight<{ topInset: number }>`
  background-color: ${Colors.Secondary_green};
  padding: ${Spacings.small}px;
  border-radius: ${BorderRadius.rounded}px;
  position: absolute;
  flex: 1;
  top: ${({ topInset }) => Spacings.extraSmall + topInset}px;
  left: ${Spacings.large}px;
  z-index: 10;
  opacity: 0.8;
`;
