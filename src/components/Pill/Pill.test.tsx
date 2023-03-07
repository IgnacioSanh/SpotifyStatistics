import React from 'react';

import { render } from '@testing-library/react-native';

import Pill from './Pill';

describe('Pill', () => {
  const TEXT = 'Pill Text';
  test('Renders text', () => {
    const { getByText } = render(<Pill title={TEXT} />);
    getByText(TEXT);
  });
});
