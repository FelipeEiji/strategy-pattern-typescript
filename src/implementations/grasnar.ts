import { PadraoDeGrasno } from "../interfaces/padrao-de-grasno";

export class Grasnar implements PadraoDeGrasno {
  constructor() {}

  public grasnar(): string {
    return "Que-Que";
  }
}
