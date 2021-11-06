import { Pato } from "./pato";
import { NaoVoa } from "../implementations/nao-voa";
import { Apito } from "../implementations/apito";

export class PatoBorracha extends Pato {
  constructor() {
    super(new NaoVoa(), new Apito());
  }

  public mostrar(): string {
    return "Olá, eu sou de um Pato Borracha!";
  }
}
