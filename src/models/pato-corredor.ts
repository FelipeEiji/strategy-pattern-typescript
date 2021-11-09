import { Pato } from "./pato";
import { VoarAsas } from "../implementations/voar-asas";
import { Grasnar } from "../implementations/grasnar";
import { CorrerRapido } from "../implementations/correr-rapido";

export class PatoCorredor extends Pato {
  constructor() {
    super(new VoarAsas(), new Grasnar(), new CorrerRapido());
  }

  public mostrar(): string {
    return "Eu sou o Pato Corredor!";
  }

  public grasnar(): string {
    return "Que-Que";
  }
}
