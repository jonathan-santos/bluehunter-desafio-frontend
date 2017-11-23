import { Component, OnInit } from '@angular/core';
import Cliente from '../../models/cliente';
import Clientes from '../../mock/clientes';

@Component({
  selector: 'app-busca-clientes',
  templateUrl: './busca-clientes.component.html',
  styleUrls: ['./busca-clientes.component.css']
})

export class BuscaClientesComponent implements OnInit {
  nomeCliente : string = ''
  clientes : Cliente[] = []

  pesquisar() : void {
    this.clientes = Clientes.filter((cliente) => {
      return cliente.nomeCompleto.toUpperCase().includes(this.nomeCliente.toUpperCase());
    });
  }
  
  constructor() { }

  ngOnInit() { }
}