import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})


export class VideoComponent implements OnInit {

  
  constructor() {

   }
   


  ngOnInit(): void {
  }
  
  

  abrirVideo1() {
    const url = 'https://www.angelmata.com/cursonube/';
    window.open(url, '_blank');
  }

}

