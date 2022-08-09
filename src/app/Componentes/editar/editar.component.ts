import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/Enitdad/Empresa';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

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


  Editar(){
    this.services.editarE(this.empresa).subscribe(data=>{

    alert("se edito");
    this.router.navigate(["listar"]);

      } );


    }//cierra editar


}