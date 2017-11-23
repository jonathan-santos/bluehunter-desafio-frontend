import { Component, OnInit } from '@angular/core';
import Livro from '../../models/livro';
import Livros from '../../mock/livros';

@Component({
  selector: 'app-busca-livros',
  templateUrl: './busca-livros.component.html',
  styleUrls: ['./busca-livros.component.css']
})

export class BuscaLivrosComponent implements OnInit {
  nomeLivro : string = ''
  livros : Livro[] = []
  livroNaoEncontrado : boolean

  pesquisar() : void {
    if(this.nomeLivro) {
      this.getLivros();
    } else {
      alert('digite um nome antes');
    }
  }

  getLivros() : void {
    this.livros = Livros.filter((item) => {
      return item.titulo.toUpperCase().includes(this.nomeLivro.toUpperCase());
    });
    this.livroNaoEncontrado = this.livros.length < 1;
  }

  constructor() { }

  ngOnInit() { }
}