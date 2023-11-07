"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Aplicacao_1 = require("./Aplicacao");
const veiculos = Aplicacao_1.Aplicacao.veiculosObjeto();
const clonados = Aplicacao_1.Aplicacao.cloneVeiculos(veiculos);
console.log("Lista de veículos");
Aplicacao_1.Aplicacao.dadosVeiculos(veiculos);
console.log('----------------------------------------------------------------------------------------------');
console.log("Lista de veículos clonados");
