import React from 'react';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div data-testid="solar-system" />
      </>
    );
  }
}

export default SolarSystem;
