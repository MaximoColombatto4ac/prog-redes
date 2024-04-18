import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from "../../services/pelicula.service";
import { Funcion } from '../../models/funcion';
import { FuncionService } from '../../services/funcion.service';
import { FormsModule } from '@angular/forms';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-formulario-funcion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-funcion.component.html',
  styleUrl: './formulario-funcion.component.css'
})
export class FormularioFuncionComponent {
  pelicula!: Pelicula;
  funcion!: Funcion;
  peliculaService: PeliculaService = inject(PeliculaService);
  funcionService: FuncionService = inject(FuncionService);
  isEditing = false;

  constructor(private route: ActivatedRoute, private router: Router){
    this.route.params.subscribe(params => {
      this.peliculaService.obtenerPelicula(params['idPelicula']).subscribe(data => {
        console.log("pelicula = ", data);
        this.pelicula = data;
      })
    });
  }

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      if (params['funcionId']) {
        this.isEditing = true;
        this.funcionService.obtenerFuncion(params['funcionId']).subscribe(data => {
          this.funcion = data;
        });
      } else {
        this.funcion = {
          id: 1000,
          pelicula: this.pelicula,
          horario: 0,
          sala: ""
        }
      }
    });
  }

  guardarFuncion(event: Event): void {
    event.preventDefault();
    if (this.isEditing) {
      this.funcionService.actualizarFuncion(this.funcion);
    }
    else{
      this.funcionService.agregarFuncion(this.funcion);
    }
    this.router.navigate(['/detalle', this.pelicula.id]);
  }
}
