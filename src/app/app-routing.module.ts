import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListagemComponent } from './listagem/listagem.component';
import { GotyListComponent } from './goty-list/goty-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota para o Home
  { path: 'listagem', component: ListagemComponent }, // Rota para a Listagem
  { path: '', component:  AppComponent}, // Rota para o AppComponent
  { path: 'goty-list', component: GotyListComponent }, // Rota para o GotyList
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
