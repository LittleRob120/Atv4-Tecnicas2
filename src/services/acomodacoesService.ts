import { Acomodacao } from '../models/acomodacao';
import { storage } from './storage';

const ACCOMMODATIONS_KEY = 'accommodations';

export const fetchAcomodacoes = (): Acomodacao[] => {
    const accommodations = storage.getItem(ACCOMMODATIONS_KEY);
    return accommodations ? JSON.parse(accommodations) : [];
};

export const addAcomodacao = (acomodacao: Acomodacao): void => {
    const accommodations = fetchAcomodacoes();
    accommodations.push(acomodacao);
    storage.setItem(ACCOMMODATIONS_KEY, JSON.stringify(accommodations));
};

export const updateAcomodacao = (updatedAcomodacao: Acomodacao): void => {
    const accommodations = fetchAcomodacoes();
    const index = accommodations.findIndex(ac => ac.id === updatedAcomodacao.id);
    if (index !== -1) {
        accommodations[index] = updatedAcomodacao;
        storage.setItem(ACCOMMODATIONS_KEY, JSON.stringify(accommodations));
    }
};

export const deleteAcomodacao = (id: number): void => {
    const accommodations = fetchAcomodacoes();
    const filteredAccommodations = accommodations.filter(ac => ac.id !== id);
    storage.setItem(ACCOMMODATIONS_KEY, JSON.stringify(filteredAccommodations));
};