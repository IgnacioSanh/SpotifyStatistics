import styled from 'styled-components/native';
import { BorderRadius } from '~theme/spacings';
import { Colors } from '~theme/colors';

export const Wrapper = styled.TouchableOpacity<{ withRank: boolean }>`
  width: ${({ withRank }) => (withRank ? 150 : 110)}px;
  height: 150px;
`;

export const NameContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const RoundedImage = styled.Image`
  border-radius: ${BorderRadius.bordered}px;
`;

export const NumberOutline = styled.Text`
  color: ${Colors.Green};
  position: absolute;
  opacity: 0.4;
  left: -30px;
  z-index: 4;
  font-size: 110px;
  font-weight: 600;
`;
