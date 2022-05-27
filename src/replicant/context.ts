import { createSignal, createContext, useContext as useCon, Signal } from "solid-js";

const Context = createContext(createSignal());

export function useContext() { return useCon(Context) }
