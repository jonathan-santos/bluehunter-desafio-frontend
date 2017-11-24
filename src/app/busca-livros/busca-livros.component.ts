import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import Livro, { ParseBook } from '../../models/livro';
import Livros from '../../mock/livros';

@Component({
  selector: 'app-busca-livros',
  templateUrl: './busca-livros.component.html',
  styleUrls: ['./busca-livros.component.less']
})

export class BuscaLivrosComponent implements OnInit {
  private urlApiLivros = ' https://dummy-blue-hunter.mybluemix.net/book/by-title/'
  
  nomeLivro : string = ''
  livros : Livro[] = []
  livroNaoEncontrado : boolean

  goBack(): void {
    this.location.back();
  }

  pesquisar() : void {
    if(this.nomeLivro) {
      this.getLivros();
    } else {
      alert('digite um nome antes');
    }
  }

  getLivros() : void {
    this.livroNaoEncontrado = false;
    this.livros = [];
    let request = new XMLHttpRequest();
    request.open('GET', this.urlApiLivros + this.nomeLivro);
    request.send();
    request.onreadystatechange = () => {
      if(request.readyState == request.DONE) {
        let clients = JSON.parse(request.response);
        for(let i = 0; i < clients.length; i++) {
          this.livros.push(ParseBook(clients[i]));
        }
        this.livroNaoEncontrado = this.livros.length < 1;
      }
    }
  }

  constructor(private location: Location) { }

  ngOnInit() { }
}