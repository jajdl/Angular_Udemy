import { Injectable } from '@angular/core';

import{HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Servicio Spotify");
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC0MdQxoOPRgVjJZ30USw_AuEP4TAIlbGu9irfydhZlEni-xNuHhAO1GwLlyMHXJwbZI5oVJqAuICCrldg'
    });

     //this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}) //spotify limita por defecto de 20 musica, abajo agrego un limite de 50
     return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=50', {headers});

   }

   getArtista(termino: string)
   {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC0MdQxoOPRgVjJZ30USw_AuEP4TAIlbGu9irfydhZlEni-xNuHhAO1GwLlyMHXJwbZI5oVJqAuICCrldg'
    });
    
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`, {headers});

   }
}