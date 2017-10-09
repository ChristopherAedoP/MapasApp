import { Marcador } from './../../interfaces/marcador.interface';
import { Injectable } from '@angular/core';


@Injectable()
export class MapasService {
  marcadores: Marcador[] = [];

  constructor() {
    const nuevoMarcador: Marcador = {
      lat: -33.442768,
      lng: -70.654126,
      draggable: true,
      titulo: 'Palacio de La Moneda'
    };

    this.marcadores.push(nuevoMarcador);
  }

  insertarMarcador(unMarcador: Marcador) {
    this.marcadores.push(unMarcador);
    this.guardarMarcadores();
  }

  guardarMarcadores() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));

  }

  cargaMarcadores() {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    } else {
      this.marcadores = [];
    }
  }
  borraMarcador(idx: number) {
    this.marcadores.splice(idx, 1);
    this.guardarMarcadores();
  }
}
