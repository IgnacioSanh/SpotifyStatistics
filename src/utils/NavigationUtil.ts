import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';

import { ScreenNames } from '~types';

const routeIcon: Record<string, IconDefinition> = {
  [ScreenNames.HOME]: faHouse,
  [ScreenNames.SEARCH]: faSearch,
  [ScreenNames.STATS]: faChartSimple,
};

export function getRouteIcon(route: string): IconDefinition {
  return routeIcon[route] || faHouse;
}
