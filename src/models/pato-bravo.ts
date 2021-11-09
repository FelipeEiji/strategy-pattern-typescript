import { Andar } from "../implementations/andar";
import { Grasnar } from "../implementations/grasnar";
import { VoarAsas } from "../implementations/voar-asas";
import { Pato } from "./pato";

export class PatoBravo extends Pato {
  constructor() {
    super(new VoarAsas(), new Grasnar(), new Andar());
  }

  public mostrar(): string {
    return "Eu sou o Pato Bravo!";
  }

  public grasnar(): string {
    return "Que-Que. Grrrrrrrrr.";
  }
}
