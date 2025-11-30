export class CadastroCliente {
    private nome: string;
    private email: string;
    private telefone: string;

    constructor(nome: string, email: string, telefone: string) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    public validarDados(): boolean {
        if (!this.nome || !this.email || !this.telefone) {
            return false;
        }
        // Adicione mais validações conforme necessário
        return true;
    }

    public salvarCliente(): void {
        if (this.validarDados()) {
            // Lógica para salvar o cliente
            console.log("Cliente salvo com sucesso:", this);
        } else {
            console.error("Dados do cliente inválidos.");
        }
    }
}

// Exemplo de uso
const cliente = new CadastroCliente("João Silva", "joao@example.com", "123456789");
cliente.salvarCliente();