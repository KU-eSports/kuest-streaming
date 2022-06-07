import { createSignal, createContext, useContext as useCon } from "solid-js";

const Context = createContext(createSignal<string>(""));

export function useContext() { return useCon(Context) }
