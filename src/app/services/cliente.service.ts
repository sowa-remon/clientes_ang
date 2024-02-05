import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { TipoCliente } from '../models/tipo_cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes:Cliente[]=[];
  private tipos:TipoCliente[]=[];

  constructor() { 
    this.clientes =[];

    this.tipos = [
      {
        id:0,
        descripcion: 'Sin definir'
      },
      {
        id:1,
        descripcion: 'Clientes activos'
      },
      {
        id:2,
        descripcion: 'Clientes inactivos'
      },
      {
        id:3,
        descripcion: 'Clientes deudores'
      }
    ];
  }

  // metodo q reotrna el arrgelo de clientes
  getClientes(){
    return this.clientes;
  }

  getTipos(){
    return this.tipos;
  }

  agregarCliente(cliente:Cliente){
    this.clientes.push(cliente);
  }

  nuevoCliente():Cliente{
    return{
      id: this.clientes.length+1,
      nombre: '',
      rfc: '',
      domicilio: '',
      tipoCliente: 0
  }
  }
}
