import { createSignal, createContext, useContext as useCon } from "solid-js";
import { MapDto } from "../@types/valorant";

const Context = createContext(createSignal<MapDto>());

export function useContext() { return useCon(Context) }
