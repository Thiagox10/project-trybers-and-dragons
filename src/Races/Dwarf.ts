import Race from './Race';

class Dwarf extends Race {
  private static instanceCount = 0;
  constructor(
    name: string,
    dexterity: number, 
    private _maxLifePoints: number = 80,
  ) {
    super(name, dexterity);
    Dwarf.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.instanceCount;
  }
}

export default Dwarf;