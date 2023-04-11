import React, { PropsWithChildren, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollableWrapper } from './styles';
import { Dimensions } from 'react-native';

interface ScreenProps {
  noSideMargin?: boolean;
  noVerticalMargin?: boolean;
  scrollable?: boolean;
}

export default function Screen({
  children,
  noSideMargin = false,
  noVerticalMargin = false,
}: PropsWithChildren<ScreenProps>) {
  const { height: wHeight } = Dimensions.get('window');
  const [screenHeight, setScreenHeight] = useState(0);

  function onContentSizeChange(_: number, contentHeight: number) {
    setScreenHeight(contentHeight);
  }
  return (
    <SafeAreaView edges={['top']}>
      <ScrollableWrapper
        noSideMargin={noSideMargin}
        onContentSizeChange={onContentSizeChange}
        noVerticalMargin={noVerticalMargin}
        scrollEnabled={screenHeight > wHeight}>
        {children}
      </ScrollableWrapper>
    </SafeAreaView>
  );
}
