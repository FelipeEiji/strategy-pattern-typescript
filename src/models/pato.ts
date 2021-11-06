import { PadraoDeVoo } from "../interfaces/padrao-de-voo";
import { PadraoDeGrasno } from "../interfaces/padrao-de-grasno";

export abstract class Pato {
  protected padraoDeVoo: PadraoDeVoo;
  protected padraoDeGrasno: PadraoDeGrasno;

  constructor(padraoDeVoo: PadraoDeVoo, padraoDeGrasno: PadraoDeGrasno) {
    this.padraoDeVoo = padraoDeVoo;
    this.padraoDeGrasno = padraoDeGrasno;
  }

  abstract mostrar(): string;

  public nadar(): string {
    return "Pato nadando...";
  }

  public setComportamentoDeVoo(padrao: PadraoDeVoo): void {
    this.padraoDeVoo = padrao;
  }

  public comportamentoPato(): string {
    return this.padraoDeVoo.voar();
  }

  public comportamentoDeGrasno(): string {
    return this.padraoDeGrasno.grasnar();
  }
}
