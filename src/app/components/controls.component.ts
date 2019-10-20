import { Component, Input, Output, EventEmitter } from '@angular/core';
import { cities } from '../models/city.model';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
  @Input()
  city: string = cities[0].value;

  @Output()
  cityChange = new EventEmitter<string>();

  cities = cities;

  onCityChange(city: string) {
    this.city = city;
    this.cityChange.emit(city);
  }
}
