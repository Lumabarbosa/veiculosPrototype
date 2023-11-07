"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aplicacao = void 0;
const Utilitario_1 = require("./Utilitario");
const Passeio_1 = require("./Passeio");
class Aplicacao {
    static veiculosObjeto() {
        const veiculos = [];
        veiculos.push(new Utilitario_1.Utilitario("Saveiro", "Volkswagen", "Preto", 4, 2), new Utilitario_1.Utilitario("Toro", "Fiat", "Cinza", 4, 4), new Passeio_1.Passeio("HB20", "Hyundai", "Branco", 4, 4), new Utilitario_1.Utilitario("Montana", "Chevrolet", "Branco", 4, 2), new Passeio_1.Passeio("Argos", "Fiat", "Verde", 4, 4), new Passeio_1.Passeio("Corolla", "Toyota", "Preto", 4, 4));
        return veiculos;
    }
    //rever
    static cloneVeiculos(veiculos) {
        const clonados = [];
        veiculos.forEach(clone => {
            clonados.push();
        });
        return clonados;
    }
    //rever
    static dadosVeiculos(veiculos) {
        veiculos.forEach(veiculo => {
            console.log(veiculo.represent());
        });
    }
}
exports.Aplicacao = Aplicacao;
