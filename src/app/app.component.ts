import { Component } from '@angular/core';
import Cliente from '../models/cliente';
import Clientes from '../mock/clientes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  clientes : Cliente[] = Clientes
}