import { Hospedagem } from '../models/hospedagem';
import { storage } from './storage';

const HOSPEDAGENS_KEY = 'hospedagens';

export const hospedagensService = {
    fetchHospedagens: (): Hospedagem[] => {
        const hospedagens = storage.getItem<Hospedagem[]>(HOSPEDAGENS_KEY);
        return hospedagens || [];
    },

    addHospedagem: (hospedagem: Hospedagem): void => {
        const hospedagens = hospedagensService.fetchHospedagens();
        hospedagens.push(hospedagem);
        storage.setItem(HOSPEDAGENS_KEY, hospedagens);
    },

    updateHospedagem: (updatedHospedagem: Hospedagem): void => {
        const hospedagens = hospedagensService.fetchHospedagens();
        const index = hospedagens.findIndex(h => h.id === updatedHospedagem.id);
        if (index !== -1) {
            hospedagens[index] = updatedHospedagem;
            storage.setItem(HOSPEDAGENS_KEY, hospedagens);
        }
    },

    deleteHospedagem: (id: number): void => {
        let hospedagens = hospedagensService.fetchHospedagens();
        hospedagens = hospedagens.filter(h => h.id !== id);
        storage.setItem(HOSPEDAGENS_KEY, hospedagens);
    }
};