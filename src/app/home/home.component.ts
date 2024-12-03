import { Component, OnInit} from '@angular/core';
import { GameAwardsService } from '../game-awards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  template: `
    <div class="container">
      <h1>Game Awards 2024</h1>
      <p>Bem-vindo ao Game Awards 2024! Explore as categorias e descubra os melhores jogos do ano.</p>
      <a routerLink="/listagem" class="btn btn-primary">Veja as Categorias</a>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games: any[] = [];

  constructor(private gameService: GameAwardsService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe(data => {
      this.games = data.results; 
    });
  }
}
