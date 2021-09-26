import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poker-list',
  templateUrl: './poker-list.component.html',
  styleUrls: ['./poker-list.component.scss']
})
export class PokerListComponent implements OnInit {

  public getAllPokemons: any;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.getAllPokemons = res.results;
      }
    );
  }

}
