import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-pjs',
  templateUrl: './agregar-pjs.component.html'
})
export class AgregarPjsComponent {

  @Input() nuevo : Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService){}

  // @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    // this.onNewPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
