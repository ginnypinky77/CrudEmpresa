import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/Enitdad/Empresa';
import { ServiceService } from 'src/app/Servicios/service.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService) { }
  empresa:Empresa =new Empresa();

  ngOnInit(): void {
  }
  Guardar(){
      this.service.guardarE(this.empresa).subscribe(
        data=>{
          alert("se guardo la empresa");
          this.router.navigate(["listar"]);
        }

      );
  }//cierra guardar
}
