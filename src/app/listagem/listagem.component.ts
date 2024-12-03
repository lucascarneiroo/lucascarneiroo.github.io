import { Component, OnInit } from '@angular/core';
import { GameAwardsService } from '../game-awards.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  games: any[] = [];

  constructor(private gameAwardsService: GameAwardsService) {}

  ngOnInit(): void {
    this.gameAwardsService.getGames().subscribe(data => {
      this.games = data.results;
    },
    error => {
      console.error('Erro ao carregar jogos', error);
    }
  );
}
}
