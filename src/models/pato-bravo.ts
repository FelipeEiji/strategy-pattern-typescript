import { Pato } from "./pato";
import { PadraoDeGrasno } from "../interfaces/padrao-de-grasno";
import { VoarAsas } from "../implementations/voar-asas";
import { Grasnar } from "../implementations/grasnar";

export class PatoBravo extends Pato {
  constructor() {
    super(new VoarAsas(), new Grasnar());
  }

  public mostrar(): string {
    return "Eu sou o Pato Bravo!";
  }

  public grasnar(): string {
    return "Que-Que. Grrrrrrrrr.";
  }
}
