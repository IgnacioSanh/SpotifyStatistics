export enum ScreenNames {
  HOME = 'HOME',
  DISCOVER = 'DISCOVER',
  STATS = 'STATS',
  LOGIN = 'LOGIN',
  ARTIST_DETAIL = 'ARTIST_DETAIL',
}

export enum NavigatorNames {
  MAIN_NAVIGATOR = 'MAIN_NAVIGATOR',
  AUTH_NAVIGATOR = 'AUTH_NAVIGATOR',
  HOME_NAVIGATOR = 'HOME_NAVIGATOR',
}

export type HomeNavigatorParamList = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.ARTIST_DETAIL]: { id: string; artistName: string };
};
