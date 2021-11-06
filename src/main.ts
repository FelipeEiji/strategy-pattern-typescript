import { VoarFoguete } from "./implementations/voar-foguete";
import { PatoRuivo } from "./models/pato-ruivo";

const main = () => {
  const pato = new PatoRuivo();

  console.log(pato.mostrar());
  console.log(pato.nadar());
  console.log(pato.comportamentoPato());

  pato.setComportamentoDeVoo(new VoarFoguete());

  console.log(pato.comportamentoPato());
  console.log(pato.comportamentoDeGrasno());
};

main();
