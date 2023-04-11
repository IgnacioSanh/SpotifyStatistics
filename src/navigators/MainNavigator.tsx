import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { MainNavigatorParamList, NavigatorNames, ScreenNames } from '~types';
import { SearchScreen, StatsScreen } from '~screens';
import { getRouteIcon } from '~utils/NavigationUtil';
import { Colors } from '~theme/colors';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator<MainNavigatorParamList>();

interface ScreenOptionsProps {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

function tabBarIconFn(route: RouteProp<ParamListBase, string>) {
  const icon = getRouteIcon(route.name);
  return function ({ color, size }: TabBarIconProps) {
    return <FontAwesomeIcon icon={icon} size={size} color={color} />;
  };
}

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }: ScreenOptionsProps) => ({
        tabBarIcon: tabBarIconFn(route),
        tabBarActiveTintColor: Colors.Green,
        tabBarInactiveTintColor: Colors.White,
        headerShown: false,
      })}>
      <Tab.Screen
        name={NavigatorNames.HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name={ScreenNames.SEARCH}
        component={SearchScreen}
        options={{ title: 'Search' }}
      />
      <Tab.Screen
        name={ScreenNames.STATS}
        component={StatsScreen}
        options={{ title: 'Stats' }}
      />
    </Tab.Navigator>
  );
}
