import styled from 'styled-components/native';
import { Colors } from '~theme/colors';
import { BorderRadius, Spacings } from '~theme/spacings';
import { SmallFontSize } from '~theme/typography';

export const SearchInput = styled.TextInput`
  background-color: ${Colors.White};
  padding: ${Spacings.small}px;
  font-size: ${SmallFontSize}px;
  border-radius: ${BorderRadius.bordered}px;
  margin: ${Spacings.small}px 0;
`;
