import React from 'react';
import { Screen } from '~components/index';
import { H1 } from '~theme/typography';

import { SearchInput } from './styles';

export default function Search() {
  return (
    <Screen>
      <H1>Search</H1>
      <SearchInput placeholder="Search for artist, song or album" />
    </Screen>
  );
}
