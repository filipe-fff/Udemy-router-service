export interface ICard {
    id: number;
    numero: string;
    titular: string;
    validade: string;
    cvv: string;
    tipo: 'debito' | 'credito';
}