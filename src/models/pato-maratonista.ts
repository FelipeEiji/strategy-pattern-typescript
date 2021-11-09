import { CorrerLongaDistancia } from "../implementations/correr-longa-distancia";
import { Grasnar } from "../implementations/grasnar";
import { VoarAsas } from "../implementations/voar-asas";
import { Pato } from "./pato";

export class PatoMaratonista extends Pato {
  constructor() {
    super(new VoarAsas(), new Grasnar(), new CorrerLongaDistancia());
  }

  public mostrar(): string {
    return "Eu sou o Pato Maratonista!";
  }

  public grasnar(): string {
    return "Que-Que";
  }
}
