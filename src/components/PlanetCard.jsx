import React from 'react';
import PropTypes from 'prop-types';

const teste = () => {
  const a = 123;
  const b = 456;
  return console.log(a+b);
};

class PlanetCard extends React.Component {
  
  render() {
    console.log(this)
    
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planet-card">
        <span data-testid="planet-name" className="planet-name">
          { planetName }
        </span>
        <img
          onClick= {() => {teste()}}
          src={ planetImage }
          className={ planetName }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
