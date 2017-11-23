import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { BuscaClientesComponent } from './busca-clientes/busca-clientes.component';
import { LivroComponent } from './livro/livro.component';
import { BuscaLivrosComponent } from './busca-livros/busca-livros.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    BuscaClientesComponent,
    LivroComponent,
    BuscaLivrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
