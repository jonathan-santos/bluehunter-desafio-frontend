import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { BuscaClientesComponent } from './busca-clientes/busca-clientes.component';
import { LivroComponent } from './livro/livro.component';
import { BuscaLivrosComponent } from './busca-livros/busca-livros.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    BuscaClientesComponent,
    LivroComponent,
    BuscaLivrosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
