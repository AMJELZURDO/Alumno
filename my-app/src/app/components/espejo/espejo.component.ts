import { Component, Input } from '@angular/core';

//HACED UN COMPONENTE NUEVO DENTRO DE LA APLICACIÓN QUE:

//permita al usuario intrododucir una cadena
//que muestre la misma cadena que va introduciendo el usuario , pero al revés
//que muestre la longitud de esa cadena
//y que diga si la longitud de esa cadena es par o impar
//OBLIGATORIO, usar un directiva *ngIf
@Component({
  selector: 'app-espejo',
  templateUrl: './espejo.component.html',
  styleUrls: ['./espejo.component.css']
})
export class EspejoComponent {

  static readonly SECUENCIA_LETRAS_DNI:string;

  num1:string;
  num2:string;
  num3: number;
  
  constructor() { 
 this.num1='';
 this.num2='';
 this.num3=0;
 
    
  }

  ngOnInit(): void {
    let inputSeleccionado : HTMLInputElement = <HTMLInputElement> document.querySelector(' [name="prefijo"]:checked');
    console.log(inputSeleccionado.value);
  }

  mostrarEspejo() {
    let numdni:number=0;
    let inputSeleccionado : HTMLInputElement = <HTMLInputElement> document.querySelector('');
    console.log(inputSeleccionado.value);
  }
  
  calcularParImpar(){
       //TODO crear funcion calculo par/impar
       //usar *ngIF
       let num3:number=1;
       
    if (this.num3 %2 === 0) {
      console.log('El número es par' + num3);
    } else {
      console.log('El número es impar' +num3);
    }
  

  }
  invertirTexto() {
    this.num2 = this.num1.split('').reverse().join('');
  }
  
}
