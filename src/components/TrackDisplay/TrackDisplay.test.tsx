import React from 'react';
import { render } from '@testing-library/react-native';

import { Track } from '~types';
import track from '~mocks/trackMock.json';

import TrackDisplay from './TrackDisplay';

const trackMock = track as unknown as Track;

describe('TrackDisplay', () => {
  test('Renders song name, artists and album image', () => {
    const { getByText } = render(<TrackDisplay track={trackMock} />);
    getByText(trackMock.name);
  });
});
