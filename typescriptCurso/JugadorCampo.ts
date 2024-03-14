import { Jugador } from "./Jugador";
import { Equipo } from "./Equipo";

export class JugadorCampo extends Jugador {

    private porcentajeGoles: number;
    private asistencias: number[];
    
    constructor(nombre: string, fecha: Date, posicion: string, provincia: string, equiposAnteriores: Equipo[], numero: number, porcentajeGoles: number, asistencias: number[]) {
        super(nombre, fecha, posicion, provincia, equiposAnteriores, numero);
        this.porcentajeGoles = porcentajeGoles;
        this.asistencias = asistencias;
    }
    get getPorcentajeGoles(): number{
        return this.porcentajeGoles;
    }
    get getAsistencias(): number[]{
        return this.asistencias;
    }
    set setPorcentajeGoles(porcentajeGoles: number){
        this.porcentajeGoles = porcentajeGoles;
    }
    set setAsistencias(asistencias: number[]){
        this.asistencias = asistencias;
    }
}