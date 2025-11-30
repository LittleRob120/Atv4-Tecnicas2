export interface Telefone {
    id: number;
    numero: string;
    tipo: 'residencial' | 'comercial' | 'celular';
}