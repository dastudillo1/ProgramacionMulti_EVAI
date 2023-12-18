import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  proyectos = [
    { nombre: 'Mall Plaza Sur' },
    { nombre: 'Plaza Oeste' },
    { nombre: 'Mall Apumanque' },
    // ... Puedes añadir más proyectos aquí con su nombre u otros detalles
  ];

  constructor() { }
}
