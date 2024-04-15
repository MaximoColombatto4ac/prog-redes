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
            duracion: "1"
        },
        {
            id: 2,
            nombre: "La pelicula 2",
            duracion: "2"
        },
        {
            id: 3,
            nombre: "La pelicula 3",
            duracion: "3"
        }
    ];
    obtenerPeliculas(): Pelicula[] {
        return this.listaPeliculas;
    }
    obtenerPelicula(id: number): Pelicula {
        const pelicula = this.listaPeliculas.find(pelicula => pelicula.id == id);
        if (!pelicula) {
            throw Error("poco pana, no se encontro la pelicula con id: " + id);
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
    borrarPelicula(id: number): void {
        this.listaPeliculas = this.listaPeliculas.filter(pelicula => pelicula.id!== id);
    }
    siguienteId(): number {
        const maxId = Math.max(...this.listaPeliculas.map(pelicula => pelicula.id), 0);
        return maxId + 1;
      }
}
