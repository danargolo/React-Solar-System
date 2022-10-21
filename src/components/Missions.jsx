import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <>
        <div data-testid="missions">
          <Title headline="Missões" />
        </div>
        <div className="missions">
          { missions.map((mission, index) => (<MissionCard
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
            key={ `${index}-${mission.name}` }
          />))}
        </div>
      </>
    );
  }
}

export default Missions;
