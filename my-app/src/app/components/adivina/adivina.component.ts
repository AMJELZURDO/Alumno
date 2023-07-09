import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
/**
   * 
   * HACED UNA APP DONDE EL PROGRAMA
   * PIENSE UN NÚMERO DEL 1 AL 100
   * 
   * EL USUARIO, TENDRÁ 5 INTENTOS PARA AVERIGÜAR el
   * NÚMERO PENSADO POR LA MÁQUINA
   * 
   * POR CADA INTENTO, SI FALLA, LE DEBEMOS DAR UNA PISTA
   * Y DECIRLE SI EL NÚMERO INTRODUCIDO ES 
   * MENOR O MAYOR QUE EL BUSCADO
   * 
   * SI ACIERTA, PUES LE DAMOS LA ENHORABUENA
   * SI SUPERA LOS 5 INTENTOS, PUES LE DECIMOS
   * QUE HA PERDIDO Y LA SOLUCIÓN
   */

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit {

  titulo:string;//titulo de la ventana
  numusuario:number;//numero introducido por el usuario
  numadivina:number;//numero que tiene que adivinar
  intentos:number;
  finpartida!: boolean;
  
  
  constructor() {
    console.log("Estoy en el constructor");
    this.titulo = "ADIVINA UN NÚMERO EN 5 INTENTOS";
    this.numusuario=0;
    console.log(this.titulo)
    this.numadivina = this.calcularNumAleaotorioDe1a100();
   
    console.log("Numero a adivinar "+ this.numadivina);
    console.log(`Numero a adivinar ${this.numadivina} por el usuario`);
    this.intentos = 0;
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("Estamos en OnInit");
  }

  calcularNumAleaotorioDe1a100():number
  {
    let numgen:number=0;

      numgen = Math.floor(Math.random() * (100) + 1);

    return numgen;
  }


    //TODO: completar la lógico, informando al usuario de las
    //circunstancias posibles HACERLO CON alert
    //1- el número buscado es mayor que el introducido
    //2- el número buscado es menor que el introducido
    //3- ACIERTO!
    //4- has perdido! te has quedado sin intentos


    comprobarIntento(): void {
      if (this.numusuario == this.numadivina) {
        //this.ganopierdo = "ACIERTO!!";
        window.alert("Has acertado!! Enhorabuena :) ");
        this.finpartida = true;
      } else {
        if (this.numusuario < this.numadivina) {
          //this.mensaje = ;
          window.alert("Llevas " + this.intentos + ". " +"El número buscado es mayor que el introducido " + this.numusuario + ".");
          
        } else {
          window.alert("Llevas " + this.intentos + ". " +"El número buscado es menor que el introducido " + this.numusuario + ".");
        }
        this.intentos++;
        if (this.intentos == 5) {
          window.alert(" Has perdido! te has quedado sin intentos. El número buscado era " + this.numadivina + ".");
          this.finpartida = true;
          
        } 
      }    
    }
  reset ()
  {
  window.location.reload();//recarga pagina la página y con ello el componente
  }  
}
