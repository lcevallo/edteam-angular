import { Component, OnInit } from '@angular/core';
import {Estudiante} from '../../shared/model/estudiante';

@Component({
  selector: 'ed-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: Estudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  constructor() { }

  ngOnInit() {

    console.log('Inicializando el componente MareialList');

    this.estudiante1={
      id: 1,
      nombre:'Luis Cevallos',
      ciudad:'Guayaquil'
    };
    this.estudiante2={
      id: 2,
      nombre:'Jorge Perez',
      ciudad:'Lima'
    };

    this.estudiante2={
      id: 3,
      nombre:'Heide Jaramillo',
      ciudad:'Rumania'
    };



  }

}
