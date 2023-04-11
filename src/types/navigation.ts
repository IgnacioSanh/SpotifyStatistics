import { NavigatorScreenParams } from '@react-navigation/native';

export enum ScreenNames {
  HOME = 'HOME',
  SEARCH = 'SEARCH',
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

export type MainNavigatorParamList = {
  [NavigatorNames.HOME_NAVIGATOR]: NavigatorScreenParams<HomeNavigatorParamList>;
  [ScreenNames.SEARCH]: { query?: string };
  [ScreenNames.STATS]: undefined;
};
