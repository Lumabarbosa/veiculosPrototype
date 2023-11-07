"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    constructor(modelo, marca, cor, numRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numRodas = numRodas;
    }
    represent() {
        return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor} e Número de rodas: ${this.numRodas}`;
    }
}
exports.Veiculo = Veiculo;
