import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons/faCompactDisc';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';

import { ScreenNames } from '~types';

const routeIcon: Record<string, IconDefinition> = {
  [ScreenNames.HOME]: faHouse,
  [ScreenNames.DISCOVER]: faCompactDisc,
  [ScreenNames.STATS]: faChartSimple,
};

export function getRouteIcon(route: string): IconDefinition {
  return routeIcon[route] || faHouse;
}
