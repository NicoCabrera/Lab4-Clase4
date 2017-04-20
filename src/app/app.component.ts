import { Component } from '@angular/core';
import { Person } from './entities/person';

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
