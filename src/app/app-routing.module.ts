import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscaClientesComponent } from './busca-clientes/busca-clientes.component'
import { BuscaLivrosComponent } from './busca-livros/busca-livros.component'
import { MenuComponent } from './menu/menu.component'

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'clientes', component: BuscaClientesComponent },
  { path: 'livros', component: BuscaLivrosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }