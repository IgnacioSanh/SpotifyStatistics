import styled from 'styled-components/native';
import { Colors } from '~theme/colors';
import { BorderRadius, Spacings } from '~theme/spacings';

export const Container = styled.View`
  padding: ${Spacings.extraSmall}px ${Spacings.extraLarge}px;
  background-color: ${Colors.Secondary_green};
  border-radius: ${BorderRadius.rounded}px;
`;
