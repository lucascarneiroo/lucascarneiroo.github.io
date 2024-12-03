import { Component, OnInit } from '@angular/core';
import { GotyService } from '../goty-list.service';

@Component({
  selector: 'app-goty-list',
  templateUrl: './goty-list.component.html',
  styleUrls: ['./goty-list.component.css']
})
export class GotyListComponent implements OnInit {
  games: { title: string, image: string }[] = [];

  constructor(private gotyService: GotyService) {}

  ngOnInit(): void {
    this.games = this.gotyService.getGames();
  }
}


