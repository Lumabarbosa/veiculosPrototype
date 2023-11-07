"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passeio = void 0;
const Veiculo_1 = require("./Veiculo");
class Passeio extends Veiculo_1.Veiculo {
    constructor(modelo, marca, cor, numRodas, numPortas) {
        super(modelo, marca, cor, numRodas);
        this.numPortas = numPortas;
    }
    clone() {
        return new Passeio(this.modelo, this.marca, this.cor, this.numRodas, this.numPortas);
    }
    represent() {
        return `${super.represent()}, Número de Portas: ${this.numPortas}`;
    }
}
exports.Passeio = Passeio;
