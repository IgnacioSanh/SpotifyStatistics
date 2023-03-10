import styled from 'styled-components/native';

import { Colors } from '~theme/colors';

export const H1FontSize = 24;
export const StandardFontSize = 16;
export const SmallFontSize = 14;

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

export const SmallFont = styled(StandardFont)`
  color: ${({ color }) => color || Colors.White};
  font-size: ${SmallFontSize}px;
  font-weight: 400;
  flex: 1;
  overflow-wrap: break-word;
`;
