import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { Colors } from '~theme/colors';

import { Circle } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {
  const { canGoBack, goBack } = useNavigation();

  if (canGoBack()) {
    return (
      <Circle onPress={goBack}>
        <FontAwesomeIcon icon={faChevronLeft} color={Colors.Green} />
      </Circle>
    );
  }

  return null;
}
