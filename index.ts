import { Aplicacao } from "./Aplicacao";
import { Veiculo } from "./Veiculo";

const veiculos = Aplicacao.veiculosObjeto();
const clonados = Aplicacao.cloneVeiculos(veiculos);

console.log("Lista de veículos")
Aplicacao.dadosVeiculos(veiculos);

console.log('----------------------------------------------------------------------------------------------')

console.log("Lista de veículos clonados")
Aplicacao.cloneVeiculos(clonados);
console.log(clonados)