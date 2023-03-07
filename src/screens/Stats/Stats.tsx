import React from 'react';
import { Text } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer';

import { Screen } from '~components';

export default function Home() {
  return (
    <Screen>
      <Text>Stats</Text>
      <FontAwesomeIcon icon={faMugSaucer} />
    </Screen>
  );
}
