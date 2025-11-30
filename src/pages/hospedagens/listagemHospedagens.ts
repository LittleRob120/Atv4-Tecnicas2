export class ListagemHospedagens {
    private hospedagens: any[]; // Replace 'any' with the appropriate type for hospedagens

    constructor() {
        this.hospedagens = [];
    }

    public async fetchHospedagens() {
        // Fetch the list of bookings from the service
        this.hospedagens = await this.getHospedagensFromService();
    }

    private async getHospedagensFromService(): Promise<any[]> {
        // Call the hospedagensService to get the data
        const response = await fetch('/api/hospedagens'); // Adjust the API endpoint as necessary
        return await response.json();
    }

    public render() {
        const table = this.createTable(this.hospedagens);
        document.getElementById('app')?.innerHTML = table;
    }

    private createTable(hospedagens: any[]): string {
        let rows = hospedagens.map(hospedagem => `
            <tr>
                <td>${hospedagem.id}</td>
                <td>${hospedagem.clienteId}</td>
                <td>${hospedagem.acomodacaoId}</td>
                <td>${hospedagem.dataInicio}</td>
                <td>${hospedagem.dataFim}</td>
            </tr>
        `).join('');

        return `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cliente ID</th>
                        <th>Acomodação ID</th>
                        <th>Data Início</th>
                        <th>Data Fim</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;
    }
}