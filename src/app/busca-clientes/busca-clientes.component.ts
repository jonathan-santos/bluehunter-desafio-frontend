import { Component, OnInit } from '@angular/core';
import Cliente, { ParseClient } from '../../models/cliente';
import Clientes from '../../mock/clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-busca-clientes',
  templateUrl: './busca-clientes.component.html',
  styleUrls: ['./busca-clientes.component.css']
})

export class BuscaClientesComponent implements OnInit {
  private urlApiClientes = 'https://dummy-blue-hunter.mybluemix.net/user/by-name/'
  
  nomeCliente : string = ''
  clientes : Cliente[] = []
  clienteNaoEncontado : boolean

  pesquisar() : void {
    if(this.nomeCliente) {
      this.getClientes();
    } else {
      alert('digite um nome antes');
    }
  }

  getClientes() : void {
    this.clienteNaoEncontado = false;
    this.clientes = [];
    let request = new XMLHttpRequest();
    request.open('GET', this.urlApiClientes + this.nomeCliente);
    request.send();
    request.onreadystatechange = () => {
      if(request.readyState == request.DONE) {
        let clients = JSON.parse(request.response);
        for(let i = 0; i < clients.length; i++) {
          this.clientes.push(ParseClient(clients[i]));
        }
        this.clienteNaoEncontado = this.clientes.length < 1;
      }
    }
  }

  constructor(private http: HttpClient) { }

  ngOnInit() { }
}