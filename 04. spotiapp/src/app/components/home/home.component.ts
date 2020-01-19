import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  // paises: any [] = [];
  nuevasCanciones: any[] = [];

  constructor(private spotify: SpotifyService) {

    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      console.log(data.albums.items);
      this.nuevasCanciones =data.albums.items;
    });  
  }

  //  constructor(private http: HttpClient) {

  //   console.log("contructor Home Listo");
  //   //Mi primer Get
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //     .subscribe( (respuesta: any) =>{
  //       this.paises = respuesta;
  //       console.log(respuesta);
  //     })

  //  }

}
