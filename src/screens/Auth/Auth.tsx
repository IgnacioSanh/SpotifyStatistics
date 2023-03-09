import React from 'react';
import { Screen, Button } from '~components';
import { Colors } from '~theme/colors';
import { H1, StandardBoldFont } from '~theme/typography';

export default function Auth() {
  return (
    <Screen>
      <H1 color={Colors.Green}>Authentication</H1>
      <StandardBoldFont>Hello. Please authenticate</StandardBoldFont>
      <Button label="Login" onPress={() => {}} />
    </Screen>
  );
}
