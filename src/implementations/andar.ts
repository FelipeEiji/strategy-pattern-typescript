import { PadraoDeCorrer } from "../interfaces/padrao-de-correr";

export class Andar implements PadraoDeCorrer {
  public correr(): string {
    return "Andando...";
  }
}
