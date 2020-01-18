import { Component, OnInit } from '@angular/core';
import{HeroesService, Heroe} from '../../servicios/heroes.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesServices:HeroesService,
              private router:Router) 
  {
    //console.log("Constructor");
   }

  ngOnInit() {
    /*console.log("ngOnInit");*/
    this.heroes = this._heroesServices.getHeroes();
    /*console.log(this.heroes);*/
  }

  verHeroe(idx:string)
  {
    this.router.navigate(['/heroe', idx]);
    console.log(idx);
  }

}
