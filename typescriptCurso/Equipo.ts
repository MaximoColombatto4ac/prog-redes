import { Contrato } from "./Contrato";
import { Jugador } from "./Jugador";
import { Arquero } from "./Arquero";
import { JugadorCampo } from "./JugadorCampo";
 
 
export class Equipo implements Contrato{
    nombre: string;
    listaJugadores: Set<Jugador>;
 
    constructor(nombre: string, listaJugadores: Set<Jugador>){
        this.nombre = nombre;
        this.listaJugadores = listaJugadores;
    }
 
    get getNombre(){
        return this.nombre;
    }
 
    get getListaJugadores(){
        return this.listaJugadores;
    }
 
    set setNombre(nombre: string){
        this.nombre = nombre;
    }
 
    set setListaJugadores(listaJugadores: Set<Jugador>){
        this.listaJugadores = listaJugadores;
    }
 
    contratar(nuevoJugador: Jugador): boolean {
        for(let equipo of nuevoJugador.getEquiposAnteriores.values()){
            if(equipo == this){
                return false;
            }
        }
 
        if(nuevoJugador instanceof Arquero){
 
            if(nuevoJugador.calcularAtajadas() > 0.6 && nuevoJugador.getGolesRecibidos < 10){
                this.listaJugadores.add(nuevoJugador);
                let equiposAnteriores = nuevoJugador.getEquiposAnteriores;
                equiposAnteriores.push(this);
                nuevoJugador.setEquiposAnteriores = equiposAnteriores;
                return true;
            }
 
        } else if(nuevoJugador instanceof JugadorCampo){
 
            if(nuevoJugador.Goles > 30 && nuevoJugador.Asistencias > 10){
                this.listaJugadores.add(nuevoJugador);
                nuevoJugador.EquiposAnteriores.add(this)
                return true;
            }
 
        }
        return false;
    }
}