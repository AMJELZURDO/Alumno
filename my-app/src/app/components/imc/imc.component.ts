import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {

  peso: number;
  altura: number;
  resultadoIMC: number;

  constructor() {
    this.peso=0;
    this.altura=0;
    this.resultadoIMC=0;
  }
  

  calcularIMC()
   {
    
    const imc = this.peso / (this.altura * this.altura);

    // Asigna el resultado del cálculo a la variable resultadoIMC
    this.resultadoIMC = imc;
    window.alert("El resultado es: " + this.resultadoIMC + ".");
  
  }



  obtenerInformeIMC(imc: number) {
    // Lógica para obtener el informe del IMC en Angular
    if (imc < 16) {
      return 'Desnutrido';
    } else if (imc >= 16 && imc < 18) {
      return 'Delgado';
    } else if (imc >= 18 && imc < 25) {
      return 'Ideal';
    } else if (imc >= 25 && imc < 31) {
      return 'Sobrepeso';
    } else {
      return 'Obeso';
    }
  }

  reset ()
  {
  window.location.reload();//recarga pagina la página y con ello el componente
  }  
}



