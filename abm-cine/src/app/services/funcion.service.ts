import { Injectable } from "@angular/core";
import { Funcion } from "../models/funcion";

@Injectable({
    providedIn: 'root'
  })
export class FuncionService {
    listaFunciones: Funcion[] = 
    [
        {
            id: 1,
            pelicula: {
                id: 1,
                nombre: "La pelicula",
                duracion: "1"
            },
            horario: 1,
            sala: "sala 1"
        },
        {
            id: 2,
            pelicula: {
                id: 2,
                nombre: "La pelicula 2",
                duracion: "2"
            },
            horario: 2,
            sala: "sala 2"
        }
    ];
    obtenerFunciones(): Funcion[] {
        return this.listaFunciones;
    }

    obtenerFuncion(id: number): Funcion {
        const funcion = this.listaFunciones.find(funcion => funcion.id == id);
        if (!funcion) {
            throw Error("No se encontró la función con id: " + id);
        }
        return funcion;
    }

    agregarFuncion(funcion: Funcion): void {
        this.listaFunciones.push(funcion);
    }

    actualizarFuncion(funcion: Funcion): void {
        const index = this.listaFunciones.findIndex(fun => fun.id == funcion.id);
        this.listaFunciones[index] = funcion;
    }

    borrarFuncion(id: number): void {
        this.listaFunciones = this.listaFunciones.filter(funcion => funcion.id !== id);
    }

    siguienteId(): number {
        const maxId = Math.max(...this.listaFunciones.map(funcion => funcion.id), 0);
        return maxId + 1;
    }
    obtenerFuncionesPorPelicula(peliculaId: number): Funcion[] {
        return this.listaFunciones.filter(funcion => funcion.pelicula.id == peliculaId);
    }
    
}
