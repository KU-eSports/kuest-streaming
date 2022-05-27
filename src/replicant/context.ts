import { createSignal, createContext, useContext as useCon } from "solid-js";

const Context = createContext(createSignal());

export function useContext() { return useCon(Context) }
