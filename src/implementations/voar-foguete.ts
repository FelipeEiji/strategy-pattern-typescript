import { PadraoDeVoo } from "../interfaces/padrao-de-voo";

export class VoarFoguete implements PadraoDeVoo {
  readonly _velocidade: number;

  constructor() {
    this._velocidade = 1000;
  }

  public voar(): string {
    return "Voando como um foguete. Velocidade: " + this.velocidade;
  }

  public get velocidade(): number {
    return this._velocidade;
  }
}
