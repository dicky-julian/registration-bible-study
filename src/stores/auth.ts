import { create } from "zustand";

type AuthStore = {
    authCode?: string;
    setAuthCode: (authCode?: string) => void;

    personId?: string;
    setPersonId: (personid?: string) => void;
}

export const useAuth = create<AuthStore>((set) => ({
    authCode: undefined,
    setAuthCode: (authCode) => set(() => ({
        authCode,
    })),

    personid: undefined,
    setPersonId: (personId) => set(() => ({
        personId,
    })),
}));