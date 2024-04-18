import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from "../../models/pelicula";
import { PeliculaService } from "../../services/pelicula.service";
import { Router } from '@angular/router';

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
  constructor(private router: Router, private peliculaService: PeliculaService){
    this.obtenerPeliculas()}


  obtenerPeliculas(){
    this.peliculaService.obtenerPeliculas().subscribe((data: Pelicula[]) => {
      this.listaPeliculas = data;
    })
  }

  eliminarPelicula(id: number) {
      this.servicio.borrarPelicula(id).subscribe(data => {
        this.obtenerPeliculas()
      });
      
  }

  editarPelicula(id: number) {
      this.router.navigate(['/editar', id]);
  }

  verMas(id: number) {
      this.router.navigate(['/detalle', id]);
  }
}
