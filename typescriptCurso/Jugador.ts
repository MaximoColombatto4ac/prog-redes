import { Equipo } from "./Equipo";

export class Jugador {

    private nombre: string;
    private fecha: Date;
    private posicion: string;
    private provincia: string;
    private equiposAnteriores: Set<Equipo>;
    private numero: number;

    constructor(nombre: string, fecha: Date, posicion: string, provincia: string, equiposAnteriores: Equipo[], numero: number) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.posicion = posicion;
        this.provincia = provincia;
        this.equiposAnteriores = equiposAnteriores;
        this.numero = numero;
    }
    get getNombre(): string {
        return this.nombre;
    }
    get getFecha(): Date {
        return this.fecha;
    }
    get getPosicion(): string {
        return this.posicion;
    }
    get getProvincia(): string {
        return this.provincia;
    }
    get getEquiposAnteriores(): Equipo[] {
        return this.equiposAnteriores;
    }
    get getNumero(): number {
        return this.numero;
    }
    set setNombre(nombre: string) {
        this.nombre = nombre;
    }
    set setFecha(fecha: Date) {
        this.fecha = fecha;
    }
    set setPosicion(posicion: string) {
        this.posicion = posicion;
    }
    set setProvincia(provincia: string) {
        this.provincia = provincia;
    }
    set setEquiposAnteriores(equiposAnteriores: Equipo[]) {
        this.equiposAnteriores = equiposAnteriores;
    }
    set setNumero(numero: number) {
        this.numero = numero;
    }
}