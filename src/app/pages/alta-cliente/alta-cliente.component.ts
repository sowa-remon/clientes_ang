import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { TipoCliente } from '../../models/tipo_cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})
export class AltaClienteComponent implements OnInit {
  cliente!:Cliente;
  tipos: TipoCliente[]=[];

  constructor(private clienteService:ClienteService){}

  ngOnInit(): void {
    this.cliente = this.clienteService.nuevoCliente();
    this.tipos = this.clienteService.getTipos();
  }

  insertarCliente(){
    this.clienteService.agregarCliente(this.cliente);
    this.cliente = this.clienteService.nuevoCliente();
  }
}
