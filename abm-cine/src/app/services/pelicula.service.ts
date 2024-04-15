import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";
import { HttpClient } from "@angular/common/http";
import { enviroments } from "../../envairoments/envairoments";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class PeliculaService {
    listaPeliculas: Pelicula[] = [];
    private myAppUrl: string;
    private myApiUrl: string;

    constructor(private http: HttpClient){
        this.myAppUrl = enviroments.endpoint;
        this.myApiUrl = "peliculas/"
    }
    obtenerPeliculas(){
        return this.http.get<Pelicula[]>(`${this.myAppUrl}${this.myApiUrl}`)
    }

    obtenerPelicula(id: number): Pelicula {
        const pelicula = this.listaPeliculas.find(pelicula => pelicula.id == id);
        if (!pelicula) {
            throw Error("poco pana, no se encontro la pelicula con id: " + id);
        }
        return pelicula;
    }
    agregarPelicula(pelicula: Pelicula): void {
        this.http.post(`${this.myAppUrl}${this.myApiUrl}`, pelicula)
    }
    actualizarPelicula(pelicula: Pelicula): void {
        const index = this.listaPeliculas.findIndex(pelicula => pelicula.id === pelicula.id);
        this.listaPeliculas[index] = pelicula;
    }
    borrarPelicula(id: number): void {
        this.listaPeliculas = this.listaPeliculas.filter(pelicula => pelicula.id!== id);
    }
}
