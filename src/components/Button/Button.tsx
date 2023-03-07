import React from 'react';
import { Text } from 'react-native';

import { Wrapper } from './styles';

interface ButtonProps {
  label: string;
  enabled?: boolean;
  onPress: () => void;
}

export default function Button({
  label,
  enabled = true,
  onPress,
}: ButtonProps) {
  return (
    <Wrapper
      onPress={onPress}
      enabled={enabled}
      testID="button"
      activeOpacity={enabled ? 0.7 : 1}>
      <Text>{label}</Text>
    </Wrapper>
  );
}
