export function detalhesCliente(clienteId: string) {
    // Fetch client details based on the provided client ID
    const cliente = fetchClientDetails(clienteId);

    // Render client details
    const detailsContainer = document.createElement('div');
    detailsContainer.innerHTML = `
        <h2>Detalhes do Cliente</h2>
        <p><strong>ID:</strong> ${cliente.id}</p>
        <p><strong>Nome:</strong> ${cliente.nome}</p>
        <p><strong>Email:</strong> ${cliente.email}</p>
        <p><strong>Telefone:</strong> ${cliente.telefone}</p>
        <p><strong>Endereço:</strong> ${cliente.endereco}</p>
    `;

    document.body.appendChild(detailsContainer);
}

function fetchClientDetails(clienteId: string) {
    // Simulate fetching client details from a service
    const clientes = [
        { id: '1', nome: 'João Silva', email: 'joao@example.com', telefone: '123456789', endereco: 'Rua A, 123' },
        { id: '2', nome: 'Maria Oliveira', email: 'maria@example.com', telefone: '987654321', endereco: 'Rua B, 456' },
    ];

    return clientes.find(cliente => cliente.id === clienteId) || { id: '', nome: 'Cliente não encontrado', email: '', telefone: '', endereco: '' };
}