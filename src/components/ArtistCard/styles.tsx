import styled from 'styled-components/native';
import { BorderRadius, Spacings } from '~theme/spacings';
import { Colors } from '~theme/colors';

export const Wrapper = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
`;

export const NameContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background-color: ${Colors.Black_soft};
  padding: ${Spacings.extraSmall / 2}px;
  border-bottom-left-radius: ${BorderRadius.bordered}px;
  border-bottom-right-radius: ${BorderRadius.bordered}px;
`;

export const RoundedImage = styled.Image`
  border-top-left-radius: ${BorderRadius.bordered}px;
  border-top-right-radius: ${BorderRadius.bordered}px;
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
