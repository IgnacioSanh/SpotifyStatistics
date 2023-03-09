import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { ScreenNames } from '~types';
import { DiscoverScreen, HomeScreen, StatsScreen } from '~screens';
import { getRouteIcon } from '~utils/NavigationUtil';
import { Colors } from '~theme/colors';

const Tab = createBottomTabNavigator();

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
        name={ScreenNames.HOME}
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name={ScreenNames.DISCOVER}
        component={DiscoverScreen}
        options={{ title: 'Discover' }}
      />
      <Tab.Screen
        name={ScreenNames.STATS}
        component={StatsScreen}
        options={{ title: 'Stats' }}
      />
    </Tab.Navigator>
  );
}