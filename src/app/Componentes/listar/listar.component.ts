import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/Enitdad/Empresa';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  empresa:Empresa[];
  constructor(private router:Router,private servicio :ServiceService) { }

  ngOnInit(): void {

    this.servicio.ListarE().subscribe( //traer la consulta de listar
      data=>{
        this.empresa=data;
        console.log("data listar-->"+JSON.stringify(data));


      }


    );

  }//cierra ngOnInit  es lo que primero se va a ejecutar del porgrama ,lo que contenga ngOnInit

  Editar(empresa:Empresa){
  localStorage.setItem("id",empresa.id.toString());
  this.router.navigate(["editar"]);
  }//cierra editar

  Eliminar(empresa:Empresa){
    localStorage.setItem("id",empresa.id.toString());
    this.router.navigate(["eliminar"]);
    }//cierra eliminar


}
