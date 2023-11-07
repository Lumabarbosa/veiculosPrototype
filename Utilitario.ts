import { Veiculo } from "./Veiculo";

export class Utilitario extends Veiculo {
    private numPortas: number;

    public constructor (modelo: string, marca:string, cor:string, numRodas:number, numPortas:number){
        super(modelo, marca, cor, numRodas);
        this.numPortas = numPortas;
    }

    public clone(): Utilitario {
        return new Utilitario(this.modelo, this.marca, this.cor, this.numRodas, this.numPortas)
    }

    public represent(): string {
        return `${super.represent()}, Número de Portas: ${this.numPortas}`
    }
}