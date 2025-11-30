export class CadastroAcomodacao {
    private nome: string;
    private tipo: string;
    private capacidade: number;

    constructor(nome: string, tipo: string, capacidade: number) {
        this.nome = nome;
        this.tipo = tipo;
        this.capacidade = capacidade;
    }

    public validarDados(): boolean {
        if (!this.nome || !this.tipo || this.capacidade <= 0) {
            console.error("Dados inválidos para cadastro de acomodação.");
            return false;
        }
        return true;
    }

    public cadastrar(): void {
        if (this.validarDados()) {
            // Lógica para cadastrar a acomodação
            console.log(`Acomodação ${this.nome} cadastrada com sucesso!`);
        }
    }
}

// Exemplo de uso
const novaAcomodacao = new CadastroAcomodacao("Suite Luxo", "Suite", 2);
novaAcomodacao.cadastrar();