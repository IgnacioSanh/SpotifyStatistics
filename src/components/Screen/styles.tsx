import styled from 'styled-components/native';

import { Spacings } from '~theme/spacings';

export const Wrapper = styled.View<{
  noSideMargin: boolean;
  noVerticalMargin: boolean;
}>`
  padding: ${({ noVerticalMargin }) =>
      noVerticalMargin ? 0 : Spacings.large}px
    ${({ noSideMargin }) => (noSideMargin ? 0 : Spacings.large)}px;
  height: 100%;
`;
