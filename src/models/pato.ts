import { PadraoDeVoo } from "../interfaces/padrao-de-voo";
import { PadraoDeGrasno } from "../interfaces/padrao-de-grasno";
import { PadraoDeCorrer } from "../interfaces/padrao-de-correr";

export abstract class Pato {
  protected padraoDeVoo: PadraoDeVoo;
  protected padraoDeGrasno: PadraoDeGrasno;
  protected padraoDeCorrer: PadraoDeCorrer;

  constructor(
    padraoDeVoo: PadraoDeVoo,
    padraoDeGrasno: PadraoDeGrasno,
    padraoDeCorrer: PadraoDeCorrer
  ) {
    this.padraoDeVoo = padraoDeVoo;
    this.padraoDeGrasno = padraoDeGrasno;
    this.padraoDeCorrer = padraoDeCorrer;
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

  public comportamentoDeCorrer(): string {
    return this.padraoDeCorrer.correr();
  }
}
