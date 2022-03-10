import Race from './Race';

class Orc extends Race {
  private static instanceCount = 0;
  constructor(
    name: string,
    dexterity: number, 
    private _maxLifePoints: number = 74,
  ) {
    super(name, dexterity);
    Orc.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.instanceCount;
  }
}

export default Orc;