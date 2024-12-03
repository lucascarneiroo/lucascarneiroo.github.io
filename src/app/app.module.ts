import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CapitalizePipe } from './capitalize.pipe';
import { EmptyPipe } from './empty.pipe';
import { HighlightDirective } from './highlight.directive';
import { provideHttpClient } from '@angular/common/http';
import { GameAwardsService } from './game-awards.service';
import { HttpClientModule } from '@angular/common/http';
import { GotyListComponent } from './goty-list/goty-list.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota para o Home
  { path: 'listagem', component: ListagemComponent }, // Rota para a Listagem
  { path: '', component:  AppComponent}, // Rota para o AppComponent
  { path: 'goty-list', component: GotyListComponent }, // Rota para o GotyList
  { path: '**', redirectTo: '' },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListagemComponent,
    CapitalizePipe,
    EmptyPipe,
    HighlightDirective,
    GotyListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    GotyListComponent,
    GameAwardsService,
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
