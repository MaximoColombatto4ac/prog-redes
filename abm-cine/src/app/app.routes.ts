import { Routes } from '@angular/router';
import { InicioComponent } from "./components/inicio/inicio.component";
import { FormularioPeliculaComponent } from './components/formulario-pelicula/formulario-pelicula.component';

export const routes: Routes = [
    {
        path: '', // al no poner ruta, arranca mostrandose el componente
        component: InicioComponent,
        title: 'Pagina Inicio'
    },
    {
      path: 'agregar',
      component: FormularioPeliculaComponent,
      title: 'Agregar Pelicula'
    },
    {
      path: 'editar/:id',
      component: FormularioPeliculaComponent,
      title: 'Editar Pelicula'
    }
];
