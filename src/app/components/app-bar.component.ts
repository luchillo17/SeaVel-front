import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  template: `
    <mat-toolbar color="primary" fxLayout="column" class="span back">
      <h1 flex>Seavel App:</h1>
      <h2 flex>Información científica al alcance de la comunidad</h2>
    </mat-toolbar>
  `,
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent {}
