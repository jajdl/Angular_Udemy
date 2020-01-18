import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre:string = "Arismendy";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  porcent:number = 0.234;
  salario:number = 80000;

  heroe = {
    nombre: "Jose",
    apellido: "Jimenez",
    edad: 50,
    direccion: {calle: "Primera",
                 Numero: "32"}
  };

  // valorDePromesa = new promise(( resolve, reject) => {
  //   setTimeout(()=> resolve('LLego la data!'), 3500);
  // })

  fecha = new Date;

  nombre2:string = "jose ArisMeNdy Jimenez de leoN";

  video = "9pyt1KQ4pxw";

  activar:boolean = true;

}
