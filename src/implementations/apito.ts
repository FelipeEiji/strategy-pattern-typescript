import { PadraoDeGrasno } from "../interfaces/padrao-de-grasno";

export class Apito implements PadraoDeGrasno {
  constructor() {}

  public grasnar(): string {
    return "Queeeeee";
  }
}
