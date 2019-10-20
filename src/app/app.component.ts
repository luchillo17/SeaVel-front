import { Component, OnInit } from '@angular/core';
import data from '../assets/data.json';

import { cities } from './models/city.model';
import { spanishMonths } from './models/month.model.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SeaVel';

  city = cities[0].value;
  phenomenon: string = null;
  temp = 20;
  level = 20;

  dateStr = '1_2000';
  mapSrc: string;

  ngOnInit(): void {
    this.getMap({});
  }

  getMap({ city = this.city, dateStr = this.dateStr }) {
    this.city = city;
    this.dateStr = dateStr;

    const monthData = data.find(
      (monthDataItem) =>
        `${spanishMonths.findIndex((month) => monthDataItem.mes === month) +
          1}_${monthDataItem.anno}` === dateStr
    );

    ({
      Temperatura: this.temp,
      nivel: this.level,
      Fenomeno: this.phenomenon
    } = monthData);

    this.mapSrc = `assets/img/${city}_${this.dateStr}.jpg`;
  }
}
