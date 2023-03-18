import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify';

import { Screen, Button } from '~components';
import { Colors } from '~theme/colors';
import { H1, StandardBoldFont } from '~theme/typography';
import { useAuthContext } from '~store/AuthProvider';

import { Wrapper, ButtonWrapper } from './styles';

export default function Auth() {
  const { login } = useAuthContext();

  return (
    <Screen>
      <Wrapper>
        <H1 color={Colors.Green}>Authentication</H1>
        <FontAwesomeIcon icon={faSpotify} color={Colors.Green} size={200} />
        <StandardBoldFont>Hello. Please authenticate</StandardBoldFont>
        <ButtonWrapper>
          <Button label="Login" onPress={login} />
        </ButtonWrapper>
      </Wrapper>
    </Screen>
  );
}
