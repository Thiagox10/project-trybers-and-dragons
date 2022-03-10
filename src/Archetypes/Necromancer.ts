import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static instanceCount = 0;
  private typeEnergy: EnergyType;
  constructor(name: string) { 
    super(name);
    this.typeEnergy = 'mana';
    Necromancer.instanceCount += 1;
  }

  get energyType(): EnergyType {
    return this.typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instanceCount;
  }
}

export default Necromancer;