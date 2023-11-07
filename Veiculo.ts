export abstract class Veiculo {
        protected modelo: string;
        protected marca: string;
        protected cor: string;
        protected numRodas: number;
    
        public constructor (modelo: string, marca:string, cor:string, numRodas:number) {
            this.modelo = modelo;
            this.marca = marca;
            this.cor = cor;
            this.numRodas = numRodas;
        }
    
        public abstract clone():  Veiculo;


        public represent(): string{
            return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor} e Número de rodas: ${this.numRodas}`
        }
}
    
