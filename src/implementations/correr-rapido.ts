import { PadraoDeCorrer } from "../interfaces/padrao-de-correr";

export class CorrerRapido implements PadraoDeCorrer {
  public correr(): string {
    return "Correndo muito rapido sem economizar energias!";
  }
}
