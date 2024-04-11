import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from "../../models/pelicula";
import { PeliculaService } from "../../services/pelicula.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-pelicula',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {
  pelicula: Pelicula;
  modoEditar = false;
  servicio: PeliculaService = inject(PeliculaService);

  constructor(private route: ActivatedRoute, private router: Router) {
    this.pelicula = {
      id: -1,
      nombre: "",
      duracion: 0
    }
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        // Si hay un ID en la ruta, cargamos la película para editar
        this.modoEditar = true;
        // Aquí deberías cargar la película con el ID proporcionado, por ejemplo, desde un servicio.
        // En este ejemplo, simplemente establecemos el ID de la película.
        this.pelicula = this.servicio.obtenerPelicula(params['id']);
      } 
    });
  }

  guardarPelicula(event: Event) {
    event.preventDefault();
    if (this.modoEditar) {
      // Aquí deberías agregar la lógica para guardar los cambios de la película editada.
      console.log('Película editada:', this.pelicula);
    } else {
      // Aquí deberías agregar la lógica para guardar la nueva película.
      console.log(this.pelicula);

      this.servicio.agregarPelicula(this.pelicula);
    }
    // Reiniciamos la película después de guardarla
    this.resetPelicula();
  }

  resetPelicula() {
    let id = this.servicio.siguienteId();
    // Reiniciamos la película para futuras operaciones de edición/agregado.
    this.pelicula = {
      id:id,
      nombre: '',
      duracion: 0
    };
  }
}
