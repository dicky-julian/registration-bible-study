import { create } from 'zustand';
import { Transaction } from '../constants/transaction';

type TransactionStore = {
    transaction?: Transaction[],
    setTransaction: (transactions: Transaction[]) => void;
    addTransaction: (transaction: Transaction) => void;
}

export const useTransaction = create<TransactionStore>((set) => ({
    transaction: undefined,
    setTransaction: (transactions) => set(() => ({
        transaction: transactions,
    })),
    addTransaction: (transaction) => set((prevs) => ({
        transaction: (prevs.transaction || []).concat([transaction]),
    })),
}));