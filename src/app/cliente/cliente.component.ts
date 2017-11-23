import { Component, OnInit, Input } from '@angular/core';
import Cliente from '../../models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {
  @Input() cliente : Cliente; 

  constructor() { }

  ngOnInit() {}
}