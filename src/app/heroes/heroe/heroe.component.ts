import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    nombre:string="ironman";
    edad:number=45
    obtenernombre():string{
        return`${this.nombre}-${this.edad}`
    }
    cambiarnombre():void{
        this.nombre="spiderman";
    }
    cambiaredad():void{
        this.edad=20;
    }
}