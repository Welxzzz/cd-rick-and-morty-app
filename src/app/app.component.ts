import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from './service/rick-and-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  characters: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.rickAndMortyService.getCharacters().subscribe((data) => {
      this.characters = data.results; 
    });
  }
}
