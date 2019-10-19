import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  template: `
    <mat-toolbar color="primary" fxLayout="column" class="span">
      <h1 flex>Seavel App:</h1>
      <h2 flex>Enteraté de la variación del nivel del mar</h2>
    </mat-toolbar>
  `
})
export class AppBarComponent {}
