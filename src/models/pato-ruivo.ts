import { Grasnar } from "../implementations/grasnar";
import { VoarAsas } from "../implementations/voar-asas";
import { PadraoDeGrasno } from "../interfaces/padrao-de-grasno";
import { Pato } from "./pato";

export class PatoRuivo extends Pato implements PadraoDeGrasno {
  constructor() {
    super(new VoarAsas(), new Grasnar());
  }

  mostrar(): string {
    return "Eu sou um Pato Ruivo!";
  }

  grasnar(): string {
    return "Que-Que.";
  }
}
