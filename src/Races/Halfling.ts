import Race from './Race';

class Halfling extends Race {
  private static instanceCount = 0;
  constructor(
    name: string,
    dexterity: number, 
    private _maxLifePoints: number = 60,
  ) {
    super(name, dexterity);
    Halfling.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.instanceCount;
  }
}

export default Halfling;