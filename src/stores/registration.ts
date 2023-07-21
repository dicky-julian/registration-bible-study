import { create } from 'zustand';
import { Payload } from '../constants/registration';

type RegistrationStore = {
    payload?: Payload[],
    setPayload: (payload: Payload[]) => void;
}

export const useRegistration = create<RegistrationStore>((set) => ({
    payload: undefined,
    setPayload: (payload) => set(() => ({
        payload,
    }))
}));