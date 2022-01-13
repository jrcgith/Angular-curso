import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes:string[]=["ironman","spiderman","hulk"]

  heroeBorrado:string="";
  borrar():void {
    console.log("borrando..")
   const heroeborrado= this.heroes.shift() || "";
   this.heroeBorrado=heroeborrado;

  }
}
