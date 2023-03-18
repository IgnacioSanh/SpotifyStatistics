import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Wrapper } from './styles';

interface ScreenProps {
  noSideMargin?: boolean;
  noVerticalMargin?: boolean;
}

export default function Screen({
  children,
  noSideMargin = false,
  noVerticalMargin = false,
}: PropsWithChildren<ScreenProps>) {
  return (
    <SafeAreaView edges={['top']}>
      <Wrapper noSideMargin={noSideMargin} noVerticalMargin={noVerticalMargin}>
        {children}
      </Wrapper>
    </SafeAreaView>
  );
}
