import { Component, OnInit } from '@angular/core';
import{HeroesService, Heroe} from '../../servicios/heroes.service';
import{ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-heroes-result',
  templateUrl: './heroes-result.component.html'
})
export class HeroesResultComponent implements OnInit {

  heroes:any = {};
  
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
               } 

  ngOnInit() {  
      this.activatedRoute.params.subscribe(params =>{
        this.heroes = this._heroesService.buscarHeroes(params['nombreHeroe']);
      console.log(this.heroes);
    });
  }



}
