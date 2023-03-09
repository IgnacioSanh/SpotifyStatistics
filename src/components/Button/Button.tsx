import React from 'react';

import { Wrapper } from './styles';
import { StandardBoldFont, Colors } from '~theme';

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
      <StandardBoldFont color={Colors.Black}>{label}</StandardBoldFont>
    </Wrapper>
  );
}
