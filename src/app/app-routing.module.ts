import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent },
  {path: 'horoscopo', component: HoroscopoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
