import { Component } from 'react';
import Planets from '../data/planets';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const planetsList = Planets.map((planet) => (<PlanetCard
      key={ planet.name }
      planetName={ planet.name }
      planetImage={ planet.image }
    />));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          { planetsList }
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
