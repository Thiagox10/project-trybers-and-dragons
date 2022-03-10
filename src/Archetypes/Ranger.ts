import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static instanceCount = 0;
  private typeEnergy: EnergyType;
  constructor(name: string) { 
    super(name);
    this.typeEnergy = 'stamina';
    Ranger.instanceCount += 1;
  }

  get energyType(): EnergyType {
    return this.typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instanceCount;
  }
}

export default Ranger;