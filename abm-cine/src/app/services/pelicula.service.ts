import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";
import { HttpClient } from "@angular/common/http";
import { enviroments } from "../../envairoments/envairoments";

@Injectable({
    providedIn: 'root'
  })
export class PeliculaService {
    private myAppUrl: string;
    private myApiUrl: string;

    constructor(private http: HttpClient){
        this.myAppUrl = enviroments.endpoint;
        this.myApiUrl = "peliculas/"
    }
    obtenerPeliculas(){
        return this.http.get<Pelicula[]>(`${this.myAppUrl}${this.myApiUrl}`)
    }
    obtenerPelicula(id: number) {
        return this.http.get<Pelicula>(`${this.myAppUrl}${this.myApiUrl}${id}`);
    }
    agregarPelicula(pelicula: Pelicula): void {
        this.http.post(`${this.myAppUrl}${this.myApiUrl}`, {pelicula}).subscribe();
    }
    actualizarPelicula(pelicula: Pelicula): void {
        this.http.put(`${this.myAppUrl}${this.myApiUrl}`, {pelicula}).subscribe();
    }
    borrarPelicula(id: number) {
        return this.http.delete(`${this.myAppUrl}${this.myApiUrl}${id}`);
    }

}
