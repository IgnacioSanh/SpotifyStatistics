import React from 'react';
import { Screen, Button } from '~components';
import { Colors } from '~theme/colors';
import { H1, StandardBoldFont } from '~theme/typography';
import { AuthService } from '~services';
import { useAppContext } from '~store/AppProvider';

export default function Auth() {
  const { setToken } = useAppContext();
  async function handlePress() {
    try {
      const token = await AuthService.login();
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Screen>
      <H1 color={Colors.Green}>Authentication</H1>
      <StandardBoldFont>Hello. Please authenticate</StandardBoldFont>
      <Button label="Login" onPress={handlePress} />
    </Screen>
  );
}
