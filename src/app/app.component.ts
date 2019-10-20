import { Component, OnInit } from '@angular/core';

import { cities } from './models/city.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SeaVel';

  city = cities[0].value;
  mapSrc: string;

  ngOnInit(): void {
    this.getMap(this.city);
  }

  getMap(city: string) {
    this.city = city;

    this.mapSrc = `assets/img/${city}_enero_2019.jpg`;
  }
}
