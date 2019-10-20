import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  foods = [
    { value: 'steak-0', viewValue: 'Charambira' },
    { value: 'pizza-1', viewValue: 'Togoroma' },
    { value: 'tacos-2', viewValue: 'Pichima' },
    { value: 'steak-0', viewValue: 'Venado' },
    { value: 'pizza-1', viewValue: 'Orpua' },
    { value: 'tacos-2', viewValue: 'Hijua' },
    { value: 'steak-0', viewValue: 'Pome' },
    { value: 'pizza-1', viewValue: 'Siviru' },
    { value: 'tacos-2', viewValue: 'Bajo Baudó' },
    { value: 'tacos-2', viewValue: 'Piliza' },
    { value: 'steak-0', viewValue: 'Arusi' },
    { value: 'pizza-1', viewValue: 'Nuqui' },
    { value: 'tacos-2', viewValue: 'Tribuga' },
    { value: 'steak-0', viewValue: 'Jurubira' },
    { value: 'pizza-1', viewValue: 'El Valle' },
    { value: 'tacos-2', viewValue: 'Mutis' },
    { value: 'tacos-2', viewValue: 'Nabuga' },
    { value: 'tacos-2', viewValue: 'Jurado' }
  ];
}
