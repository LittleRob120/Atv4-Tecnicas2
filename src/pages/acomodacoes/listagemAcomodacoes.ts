export class ListagemAcomodacoes {
    private acomodacoes: any[]; // Replace 'any' with the appropriate type for accommodations

    constructor() {
        this.acomodacoes = [];
    }

    public async fetchAcomodacoes() {
        // Fetch accommodations from the service
        this.acomodacoes = await this.getAcomodacoesFromService();
    }

    private async getAcomodacoesFromService(): Promise<any[]> {
        // Simulate fetching data from a service
        return [
            { id: 1, nome: 'Acomodação 1', tipo: 'Tipo A' },
            { id: 2, nome: 'Acomodação 2', tipo: 'Tipo B' },
            // Add more sample data as needed
        ];
    }

    public render() {
        const table = this.createTable(this.acomodacoes);
        document.getElementById('app')?.innerHTML = table;
    }

    private createTable(acomodacoes: any[]): string {
        let rows = acomodacoes.map(acomodacao => `
            <tr>
                <td>${acomodacao.id}</td>
                <td>${acomodacao.nome}</td>
                <td>${acomodacao.tipo}</td>
            </tr>
        `).join('');

        return `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;
    }
}