import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';


import { AgmCoreModule } from '@agm/core';

import { MapasService } from './services/mapas/mapas.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVbtHJ0KoSk4GRgODXMhqIwklNNghi3jA'
    })
  ],
  providers: [MapasService] ,
  bootstrap: [AppComponent]
})
export class AppModule {}
