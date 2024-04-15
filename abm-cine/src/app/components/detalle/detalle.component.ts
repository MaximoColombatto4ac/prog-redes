import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Pelicula } from "../../models/pelicula";
import { PeliculaService } from "../../services/pelicula.service";
import { Funcion } from '../../models/funcion';
import { FuncionService } from '../../services/funcion.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  listaFunciones: Funcion[] = [];
  pelicula!: Pelicula;
  peliculaService: PeliculaService = inject(PeliculaService);
  funcionService: FuncionService = inject(FuncionService);
  constructor(private route: ActivatedRoute, private router: Router){
    this.route.params.subscribe(params => {
      this.pelicula = this.peliculaService.obtenerPelicula(params['id']);
      this.listaFunciones = this.funcionService.obtenerFuncionesPorPelicula(params['id']);
    });
  }
  agregarFuncion(id: number) {
    this.router.navigate(['/detalle/agregar', id]);
  }
  editarFuncion(idPelicula: number, idFuncion: number) {
    this.router.navigate(['/detalle/editar', idPelicula, idFuncion]);
  }
  eliminarFuncion(id: number) {
    this.funcionService.borrarFuncion(id)
    this.listaFunciones= this.funcionService.obtenerFuncionesPorPelicula(this.pelicula.id)
  }
}
