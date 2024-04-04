import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from "../../models/pelicula";
import { PeliculaService } from "../../services/pelicula.service";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  listaPeliculas: Pelicula[] = [];
  servicio: PeliculaService = inject(PeliculaService);
  constructor(){
    this.listaPeliculas = this.servicio.obtenerPeliculas();
  }
}
