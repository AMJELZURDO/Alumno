import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { DniComponent } from './components/dni/dni.component';
import { PerroComponent } from './components/perro/perro.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { VideoComponent } from './components/video/video.component';
import { EspejoComponent } from './components/espejo/espejo.component';
import { CadenaComponent } from './components/cadena/cadena.component';
import { ImcComponent } from './components/imc/imc.component';



@NgModule({
  declarations: [
    AppComponent,
    AdivinaComponent,
    DniComponent,
    PerroComponent,
  VideoComponent,  
  EspejoComponent,
  CadenaComponent,
  ImcComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
