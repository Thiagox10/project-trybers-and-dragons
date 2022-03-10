import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static instanceCount = 0;
  private typeEnergy: EnergyType;
  constructor(name: string) { 
    super(name);
    this.typeEnergy = 'stamina';
    Warrior.instanceCount += 1;
  }

  get energyType(): EnergyType {
    return this.typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instanceCount;
  }
}

export default Warrior;