import styled from 'styled-components/native';

import { Spacings } from '~theme/spacings';

export const Row = styled.View`
  flex-direction: row;
  gap: ${Spacings.small}px;
  justify-content: space-between;
  align-items: center;
`;

export const Categories = styled.View`
  flex-direction: row;
  gap: ${Spacings.small}px;
  justify-content: flex-start;
  margin: ${Spacings.medium}px 0;
`;

export const RowBottom = styled(Row)`
  align-items: flex-end;
`;
