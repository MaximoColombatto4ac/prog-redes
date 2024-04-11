import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from "../../models/pelicula";
import { PeliculaService } from "../../services/pelicula.service";

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  listaPeliculas: Pelicula[] = [];
  servicio: PeliculaService = inject(PeliculaService);
  constructor(){
    this.listaPeliculas = this.servicio.obtenerPeliculas();
  }

}
