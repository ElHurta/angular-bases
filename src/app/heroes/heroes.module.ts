import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    //Componentes
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //Visibles fuera del modulo
    exports: [
        ListadoComponent
    ],
    //Modulos (Usualmente)
    imports: [
        // Para obtener directivas personalizadas de Angular
        CommonModule
    ]
})
export class HeroesModule {

}