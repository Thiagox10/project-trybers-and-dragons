import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static instanceCount = 0;
  private typeEnergy: EnergyType;
  constructor(name: string) { 
    super(name);
    this.typeEnergy = 'mana';
    Mage.instanceCount += 1;
  }

  get energyType(): EnergyType {
    return this.typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return Mage.instanceCount;
  }
}

export default Mage;