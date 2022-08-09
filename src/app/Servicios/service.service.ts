import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Empresa } from '../Enitdad/Empresa';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  urllistar=  'http://localhost:9000/EmpresaWs/listar'
  urlBuscar=  'http://localhost:9000/EmpresaWs/buscar'
  urlGuardar= 'http://localhost:9000/EmpresaWs/guardar'
  urlEditar=  'http://localhost:9000/EmpresaWs/editar'
  urlEliminar='http://localhost:9000/EmpresaWs/eliminar'

  ListarE(){
    return this.http.get<Empresa[]>(this.urllistar);

  }

  buscarE(empresa:Empresa){
    return this.http.post<Empresa>(this.urlBuscar,empresa);

  }
  guardarE(empresa:Empresa){
    return this.http.post<Empresa>(this.urlGuardar,empresa);

  }
  editarE(empresa:Empresa){
    return this.http.post<Empresa>(this.urlEditar,empresa);

  }
  eliminarE(empresa:Empresa){
    return this.http.post<Empresa>(this.urlEliminar,empresa);

  }

}
