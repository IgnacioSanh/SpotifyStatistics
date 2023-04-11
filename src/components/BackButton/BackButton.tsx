import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { Colors } from '~theme/colors';

import { Circle } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BackButton() {
  const { canGoBack, goBack } = useNavigation();
  const { top } = useSafeAreaInsets();

  if (canGoBack()) {
    return (
      <Circle onPress={goBack} topInset={top}>
        <FontAwesomeIcon icon={faChevronLeft} color={Colors.Green} />
      </Circle>
    );
  }

  return null;
}
