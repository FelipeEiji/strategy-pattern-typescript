import { PadraoDeVoo } from "../interfaces/padrao-de-voo";

export class VoarAsas implements PadraoDeVoo {
  readonly _velocidade: number;

  constructor() {
    this._velocidade = 10;
  }

  public voar(): string {
    return "Voando como um pssaro que voa. Velocidade: " + this.velocidade;
  }

  public get velocidade(): number {
    return this._velocidade;
  }
}
