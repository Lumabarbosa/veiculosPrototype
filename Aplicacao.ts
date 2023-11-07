import { Veiculo } from "./Veiculo";
import { Utilitario } from "./Utilitario";
import { Passeio } from "./Passeio";

export class Aplicacao {
    public static veiculosObjeto(): Veiculo []{
        const veiculos: Veiculo[] = [];

        veiculos.push(
            new Utilitario("Saveiro", "Volkswagen", "Preto", 4, 2),
            new Utilitario("Toro", "Fiat", "Cinza", 4, 4),
            new Passeio("HB20", "Hyundai", "Branco", 4, 4),
            new Utilitario("Montana", "Chevrolet", "Branco", 4, 2),
            new Passeio("Argos", "Fiat", "Verde", 4, 4),
            new Passeio("Corolla", "Toyota", "Preto", 4, 4)
        );
        return veiculos;
    }

    //rever
    public static cloneVeiculos(veiculos: Veiculo[]): Veiculo[] {
        const clonados: Veiculo [] = [];
        veiculos.forEach(veiculo => {
            clonados.push(veiculo.clone());
        });
        return clonados;
    }

//rever
    public static dadosVeiculos (veiculos: Veiculo []):void {
        veiculos.forEach(veiculo => {
            console.log(veiculo.represent());
        });
    }
}
