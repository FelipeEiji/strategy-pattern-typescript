import { VoarFoguete } from "./implementations/voar-foguete";
import { PatoCorredor } from "./models/pato-corredor";
import { PatoRuivo } from "./models/pato-ruivo";

const main = () => {
  const pato = new PatoRuivo();

  console.log(pato.mostrar());
  console.log(pato.nadar());
  console.log(pato.comportamentoPato());

  pato.setComportamentoDeVoo(new VoarFoguete());

  console.log(pato.comportamentoPato());
  console.log(pato.comportamentoDeGrasno());

  const patoCorredor = new PatoCorredor();

  console.log(patoCorredor.comportamentoDeCorrer());
};

main();
