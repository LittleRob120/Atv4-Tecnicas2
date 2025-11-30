export function listagemClientes() {
    // Fetch client data from the service
    fetch('/api/clientes')
        .then(response => response.json())
        .then(data => {
            const table = document.createElement('table');
            const headerRow = document.createElement('tr');
            headerRow.innerHTML = `
                <th>ID</th>
                <th>Nome</th>
                <th>Contato</th>
                <th>Ações</th>
            `;
            table.appendChild(headerRow);

            data.forEach(cliente => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${cliente.id}</td>
                    <td>${cliente.nome}</td>
                    <td>${cliente.contato}</td>
                    <td>
                        <button onclick="detalhesCliente(${cliente.id})">Detalhes</button>
                        <button onclick="editarCliente(${cliente.id})">Editar</button>
                    </td>
                `;
                table.appendChild(row);
            });

            document.getElementById('app').innerHTML = '';
            document.getElementById('app').appendChild(table);
        })
        .catch(error => {
            console.error('Erro ao buscar clientes:', error);
        });
}