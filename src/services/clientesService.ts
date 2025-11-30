// src/services/clientesService.ts

import { Cliente } from '../models/cliente';

const clientes: Cliente[] = [];

// Fetch all clients
export const listarClientes = (): Cliente[] => {
    return clientes;
};

// Fetch a client by ID
export const buscarClientePorId = (id: number): Cliente | undefined => {
    return clientes.find(cliente => cliente.id === id);
};

// Add a new client
export const adicionarCliente = (cliente: Cliente): void => {
    clientes.push(cliente);
};

// Update an existing client
export const atualizarCliente = (id: number, clienteAtualizado: Cliente): void => {
    const index = clientes.findIndex(cliente => cliente.id === id);
    if (index !== -1) {
        clientes[index] = clienteAtualizado;
    }
};

// Remove a client
export const removerCliente = (id: number): void => {
    const index = clientes.findIndex(cliente => cliente.id === id);
    if (index !== -1) {
        clientes.splice(index, 1);
    }
};