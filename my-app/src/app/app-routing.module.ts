import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { PerroComponent } from './components/perro/perro.component';
import { CadenaComponent } from './components/cadena/cadena.component';
import { ImcComponent } from './components/imc/imc.component';
import { EspejoComponent } from './components/espejo/espejo.component';
import { VideoComponent } from './components/video/video.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { RestaurantesComponent } from './components/restaurante/restaurantes.component';
import { FormularioRestauranteComponent } from './components/formulario-restaurante/formulario-restaurante.component';


//en este array de rutas tengo q tener una ruta/path asociado al componente
const routes: Routes = [
  {path:"adivina", component: AdivinaComponent},
  {path:"dni", component: DniComponent},
  {path:"perros", component: PerroComponent},
  {path:"cadena", component: CadenaComponent},
  {path:"imc", component: ImcComponent},
  {path:"espejo", component: EspejoComponent},
  {path:"video", component: VideoComponent},
  {path:"chuck", component: ChuckComponent},
  {path:"restaurantes", component: RestaurantesComponent},
  {path:"restaurantes/nuevo", component: FormularioRestauranteComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
