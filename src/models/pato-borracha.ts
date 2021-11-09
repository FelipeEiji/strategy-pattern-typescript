import { Pato } from "./pato";
import { NaoVoa } from "../implementations/nao-voa";
import { Apito } from "../implementations/apito";
import { Andar } from "../implementations/andar";

export class PatoBorracha extends Pato {
  constructor() {
    super(new NaoVoa(), new Apito(), new Andar());
  }

  public mostrar(): string {
    return "Olá, eu sou de um Pato Borracha!";
  }
}
