import styled from 'styled-components/native';

import { Colors } from '~theme/colors';

export const H1FontSize = 24;
export const StandardFontSize = 16;

export const H1 = styled.Text<{ color?: Colors }>`
  color: ${({ color }) => color || Colors.White};
  font-size: ${H1FontSize}px;
  font-weight: 600;
`;

export const StandardFont = styled.Text<{ color?: Colors }>`
  color: ${({ color }) => color || Colors.White};
  font-size: ${StandardFontSize}px;
  font-weight: 400;
`;

export const StandardBoldFont = styled(StandardFont)`
  color: ${({ color }) => color || Colors.White};
  font-size: ${StandardFontSize}px;
  font-weight: 600;
`;
