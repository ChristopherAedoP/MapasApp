import { Marcador } from './interfaces/marcador.interface';
import { MapasService } from './services/mapas/mapas.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lat = -33.442768;
  lng = -70.654126;
  zoom = 16;

  marcadorSel: any = null;
  guardado: Boolean = false;

  constructor(public _ms: MapasService)  {

    this._ms.cargaMarcadores();
  }
  ngOnInit() {

  }

  clickMapa(event) {
    const nuevoMarcador: Marcador = {
      lat: event.coords.lat,
      lng: event.coords.lng,
      draggable: false,
      titulo: 'sin titulo'
    };

    this._ms.insertarMarcador(nuevoMarcador);
    this.marcadorSel = null;
  }

  clickMarcador(elMarcador: Marcador, index: number) {
    console.log(elMarcador, index);
    this.marcadorSel = elMarcador;



  }
  FinArrastrarMarcador(elMarcador, event) {
    console.log(elMarcador, event);

    const lat = event.coords.lat;
    const lng = event.coords.lng;

    elMarcador.lat = lat;
    elMarcador.lng = lng;

    this._ms.guardarMarcadores();
  }
  cierraInfo() {
    this.marcadorSel = null;
  }
  guardarMarcador() {
    this._ms.guardarMarcadores();
    this.guardado = true ;


    setTimeout(() => this.guardado = false, 5000);

    console.log(this.guardado);

  }
}
