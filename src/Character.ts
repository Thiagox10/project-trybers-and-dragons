import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

class Character implements Fighter {
  private race: Race;
  private archetype: Archetype;
  private maxLifePoints: number;
  private lifePoints: number;
  private strength: number;
  private defense: number;
  private dexterity: number;
  private energy: Energy;

  constructor(name: string) { 
    this.race = new Elf();
    this.archetype = new Mage();
  }
}

export default Character;