import styled from 'styled-components/native';
import { Colors } from '~theme/colors';
import { BorderRadius, Spacings } from '~theme/spacings';

export const Circle = styled.TouchableHighlight`
  background-color: ${Colors.Secondary_green};
  padding: ${Spacings.small}px;
  border-radius: ${BorderRadius.rounded}px;
  position: absolute;
  flex: 1;
  left: ${Spacings.large}px;
  z-index: 10;
  opacity: 0.8;
`;
