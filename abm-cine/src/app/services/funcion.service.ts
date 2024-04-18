import { Injectable } from "@angular/core";
import { Funcion } from "../models/funcion";
import { enviroments } from "../../envairoments/envairoments";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class FuncionService {
    private myAppUrl: string;
    private myApiUrl: string;

    constructor(private http: HttpClient){
        this.myAppUrl = enviroments.endpoint;
        this.myApiUrl = "funciones/"
    }
    obtenerFunciones() {
        return this.http.get<Funcion[]>(`${this.myAppUrl}${this.myApiUrl}`);
    }

    obtenerFuncion(id: number) {
        return this.http.get<Funcion>(`${this.myAppUrl}${this.myApiUrl}${id}`);
    }

    agregarFuncion(funcion: Funcion) {
        this.http.post(`${this.myAppUrl}${this.myApiUrl}`, {funcion}).subscribe();
    }

    actualizarFuncion(funcion: Funcion): void {
        this.http.put(`${this.myAppUrl}${this.myApiUrl}`, {funcion}).subscribe();
    }

    borrarFuncion(id: number) {
        return this.http.delete(`${this.myAppUrl}${this.myApiUrl}${id}`);
    }
    
    
}
