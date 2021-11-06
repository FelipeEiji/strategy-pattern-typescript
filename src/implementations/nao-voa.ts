import { PadraoDeVoo } from "../interfaces/padrao-de-voo";

export class NaoVoa implements PadraoDeVoo {
  readonly _velocidade: number;

  constructor() {
    this._velocidade = 0;
  }

  public voar(): string {
    return "Esse pato não voa. Velocidade: " + this.velocidade;
  }

  public get velocidade(): number {
    return this._velocidade;
  }
}
