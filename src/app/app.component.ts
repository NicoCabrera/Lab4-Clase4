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

  vacio=[];
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

  /*configuraciones para la tabla del componente. Para configuraciones más complejas, ver https://akveo.github.io/ng2-smart-table/#/documentation
    Las configuraciones básicas sobre el tag html son las propiedades 'source' y 'settings'.
  */
  settings={
    pager:{
      perPage: 2      // <------ para mostrar items paginados. Dos items por pagina en éste ejemplo
    },
    noDataMessage:"No hay datos para mostrar",
    actions:{
      edit:true,
      add:true,
      delete:true,
    },
    edit:{
      editButtonContent:"Modificar",
      create:true,
      cancel:true,
      confirmSave:true
    },
    columns:{
      nombre:{
        title:"Nombre",
        editable:false,
        editor:{
          type:"textarea"
        }
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

  showMessage(e){
    console.log(e);
    e.confirm.resolve(e.newData);
  }
}
