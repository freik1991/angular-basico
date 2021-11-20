import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  heroes: string[] = ['Spiderman','Ironman','Hulk'];

  heroe : string = '';
  borrarHeroe(){
     this.heroe= this.heroes.shift() || '';
    console.log('borrando...');
  }

  constructor() {
    console.log('constructor');
   }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
