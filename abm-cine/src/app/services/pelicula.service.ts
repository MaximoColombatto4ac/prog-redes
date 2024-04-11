import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable({
    providedIn: 'root'
  })
export class PeliculaService {
    listaPeliculas: Pelicula[] = 
    [
        {
            id: 1,
            nombre: "La pelicula",
            duracion: 10
        },
        {
            id: 2,
            nombre: "La pelicula 2",
            duracion: 20
        },
        {
            id: 3,
            nombre: "La pelicula 3",
            duracion: 30
        }
    ];
    obtenerPeliculas(): Pelicula[] {
        return this.listaPeliculas;
    }
    obtenerPelicula(id: Number): Pelicula {
        const pelicula = this.listaPeliculas.find(pelicula => pelicula.id === id);
        if (!pelicula) {
            throw Error("poco pana, no se encontro la pelicula")
        }
        return pelicula;
    }
    agregarPelicula(pelicula: Pelicula): void {
        this.listaPeliculas.push(pelicula);
    }
    actualizarPelicula(pelicula: Pelicula): void {
        const index = this.listaPeliculas.findIndex(pelicula => pelicula.id === pelicula.id);
        this.listaPeliculas[index] = pelicula;
    }
    borrarPelicula(id: Number): void {
        this.listaPeliculas = this.listaPeliculas.filter(pelicula => pelicula.id!== id);
    }
    siguienteId(): number {
        const maxId = Math.max(...this.listaPeliculas.map(pelicula => pelicula.id), 0);
        return maxId + 1;
      }
}
