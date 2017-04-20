import { Component } from '@angular/core';
import { Person } from './entities/person';
import { Ng2SmartTableModule } from 'ng2-smart-table'; //<----- lo importamos

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Propiedades
  datos:Array<Person> =[{
    nombre:"Juan",
    email:"elmaildejuan@gmail",
    edad:20
  },
  {
    nombre:"Pedro",
    email:"elmaildePedro@gmail",
    edad:30
  },
  {
    nombre:"Lucas",
    email:"elmaildeLucas@gmail",
    edad:50
  }];

  //configuraciones para la tabla del componente
  settings={
    columns:{
      nombre:{
        title:"Nombre",
      },
      edad:{
        title:"Edad",
      },
      email:{
        title:"E-mail",
      }
    }
  }

  form={
    nombre:"unNombre",
    email:"mi mail"
  };

  showForm=false;


  //Metodos
  onClick(e,form)
  { 
    console.log(e);
    console.log(form);
  }
  showFormStateChange(){
    this.showForm = !this.showForm;
  }
}
