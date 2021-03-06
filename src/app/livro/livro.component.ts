import { Component, OnInit, Input } from '@angular/core';
import { Livro } from '../../models/livro';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.less']
})

export class LivroComponent implements OnInit {
  @Input() livro : Livro
  
  constructor() { }

  ngOnInit() { }
}