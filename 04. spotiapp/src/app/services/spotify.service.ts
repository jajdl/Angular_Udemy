import { Injectable } from '@angular/core';

import{HttpClient, HttpHeaders} from '@angular/common/http';
import{map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Servicio Spotify");
   }

   getQuery(query: string)
   {
      const url = `https://api.spotify.com/v1/${ query }`;

      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQBppL7WRmtdz8fIOQAMlxDs9lpjklD-1yrAfJmoo2AmDxVtMW4m5dDUqeKrgHIN4UC_ZtZ2Zjqxp0C10co'
      });

      return this.http.get(url, {headers});
   }

   getNewReleases(){

      //this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}) //spotify limita por defecto de 20 musica, abajo agrego un limite de 50

      //  return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=50', {headers})
      //           .pipe(map(data => {
      //             return data['albums'].items;
      //           }));

      return this.getQuery('browse/new-releases?limit=50')
                .pipe( map( data => data['albums'].items ));
   }

   getArtista(termino: string)
   {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQBppL7WRmtdz8fIOQAMlxDs9lpjklD-1yrAfJmoo2AmDxVtMW4m5dDUqeKrgHIN4UC_ZtZ2Zjqxp0C10co'
    // });
    
    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`, {headers})
    //         .pipe(map(data => data['artists'].items));
            //cuando una funcion de flecha tiene una unica linea y esa unica linea es el return la podemos abreviar 

    
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
            .pipe(map(data => data['artists'].items));

   }
}