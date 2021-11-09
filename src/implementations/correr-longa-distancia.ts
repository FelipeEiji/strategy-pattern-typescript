import { PadraoDeCorrer } from "../interfaces/padrao-de-correr";

export class CorrerLongaDistancia implements PadraoDeCorrer {
  public correr(): string {
    return "Correndo em uma velocidade constante, economizando energia para ir mais longe!";
  }
}
