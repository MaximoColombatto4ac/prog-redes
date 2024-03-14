import { Jugador } from "./Jugador";
import { Equipo } from "./Equipo";

export class Arquero extends Jugador {
    
    private atajadas: number;
    private golesRecibidos: number;

    public constructor(nombre: string, fecha: Date, posicion: string, provincia: string, equiposAnteriores: Equipo[], numero: number, atajadas: number, golesRecibidos: number){
        super(nombre, fecha, posicion, provincia, equiposAnteriores, numero);
        this.atajadas = atajadas;
        this.golesRecibidos = golesRecibidos;
    }
    get getatajadas(): number{
        return this.atajadas;
    }
    get getGolesRecibidos(): number{
        return this.golesRecibidos;
    }
    set setatajadas(atajadas: number){
        this.atajadas = atajadas;
    }
    set setGolesRecibidos(golesRecibidos: number){
        this.golesRecibidos = golesRecibidos;
    }
    calcularAtajadas(){
            return this.golesRecibidos * 100 /this.atajadas;
        }
}