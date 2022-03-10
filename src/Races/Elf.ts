import Race from './Race';

class Elf extends Race {
  private static instanceCount = 0;
  constructor(
    name: string,
    dexterity: number, 
    private _maxLifePoints: number = 99,
  ) {
    super(name, dexterity);
    Elf.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.instanceCount;
  }
}

export default Elf;