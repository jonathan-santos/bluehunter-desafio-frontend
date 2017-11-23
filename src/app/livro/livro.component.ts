import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import Livro from '../../models/livro';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})

export class LivroComponent implements OnInit {
  livro : Livro = {
    id: 0,
    titulo: 'Guia do Mochileiro das galáxias',
    autor: 'Douglas Adams',
    preco: 'R$ 20,00',
    anoPublicado: 1979,
    nota: '5/5'
  }
  
  constructor() { }

  ngOnInit() { }
}