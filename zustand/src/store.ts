import { create } from "zustand";

export type CounterStore = {
    count: number;
    increment: () => void;
    incrementAsync: () => Promise<void>; 
    decrement: () => void;
};

export const useCounterStore = create((set) => ({ // function name starts with 'use' to follow React conventions for hooks
    count: 0,
    increment: () => {
        set((state: CounterStore) => ({count: state.count + 1}) )
    },
    incrementAsync: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set((state: CounterStore) => ({count: state.count + 1}))
    },
    decrement: () => {
        set((state: CounterStore) => ({count: state.count - 1}))
    }
}))