import { Jugador } from "./Jugador";

export interface Contrato{
    contratar: (jugador: Jugador) => void;
    renovar: (jugador: Jugador) => void;
}