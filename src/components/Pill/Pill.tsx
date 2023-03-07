import React from 'react';

import { StandardBoldFont } from '~theme/typography';

import { Container } from './styles';

interface PillProps {
  title: string;
}

export default function Pill({ title }: PillProps) {
  return (
    <Container>
      <StandardBoldFont>{title}</StandardBoldFont>
    </Container>
  );
}
