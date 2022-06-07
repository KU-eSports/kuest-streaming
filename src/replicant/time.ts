import { createSignal, createContext, useContext as useCon } from "solid-js";

const Context = createContext(createSignal<Date>());

export function useContext() { return useCon(Context) }
