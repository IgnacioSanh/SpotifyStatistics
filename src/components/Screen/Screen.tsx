import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Wrapper } from './styles';

export default function Screen({ children }: PropsWithChildren) {
  return (
    <SafeAreaView edges={['top']}>
      <Wrapper>{children}</Wrapper>
    </SafeAreaView>
  );
}
