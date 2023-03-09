import styled from 'styled-components/native';
import { Colors } from '~theme/colors';
import { BorderRadius, Spacings } from '~theme/spacings';

export const Wrapper = styled.TouchableOpacity<{ enabled: boolean }>`
  padding: ${Spacings.medium}px ${Spacings.extraLarge}px;
  background-color: ${Colors.Green};
  border-radius: ${BorderRadius.rounded}px;
  align-items: center;
`;
