import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/Enitdad/Empresa';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(private router:Router,private services:ServiceService) { }
  empresa:Empresa= new Empresa();

  ngOnInit(): void {
    this.Buscar();
  }
    Buscar(){

       let id =localStorage.getItem("id");
       this.empresa.id =+ Number(id);
    

    this.services.buscarE(this.empresa).subscribe(data=>{
          this.empresa=data;

    });
}//cierra buscar


  Eliminar(){
    this.services.eliminarE(this.empresa).subscribe(data=>{

    alert("se elimino");
    this.router.navigate(["listar"]);

      } );


    }//cierra editar

}
