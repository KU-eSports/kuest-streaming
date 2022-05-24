import { createSignal, createContext, useContext } from "solid-js";

const Context = createContext(createSignal());

export function useState() { return useContext(Context); }