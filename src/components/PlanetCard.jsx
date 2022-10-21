import React from "react";
import PropTypes from "prop-types";

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <span data-testid="planet-name">
          { planetName }
        </span>
        <img src={planetImage} alt= {`Planeta ${planetName}`}></img>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
