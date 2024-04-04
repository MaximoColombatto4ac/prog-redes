import { Pelicula } from "../models/pelicula";

export class PeliculaService {
    protected listaPeliculas: Pelicula[] = 
    [
        {
            id: "1",
            nombre: "La pelicula",
            duracion: 10
        },
        {
            id: "2",
            nombre: "La pelicula 2",
            duracion: 20
        }
    ];
    obtenerPeliculas(): Pelicula[] {
        return this.listaPeliculas;
    }
}
