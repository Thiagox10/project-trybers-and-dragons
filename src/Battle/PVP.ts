import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  constructor(protected player1: Fighter, protected player2: Fighter) {
    super(player1);
  }

  fight(): number {
    return this.player1.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;