import React from 'react';
import { Text } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer';

import { Screen } from '~components';

export default function Discover() {
  return (
    <Screen>
      <Text>Discover</Text>
      <FontAwesomeIcon icon={faMugSaucer} />
    </Screen>
  );
}
