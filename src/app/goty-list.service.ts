import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GotyService {
  getGames() {
    return [
      {
        title: 'Astrobot',
        image: '/assets/images/astrobot.webp'
      },
      {
        title: 'Balatro',
        image: '/assets/images/balastro.jpg'
      },
      {
        title: 'Black Myth: Wukong',
        image: '/assets/images/wukong.jpeg'
      },
      {
        title: 'Elden Ring: Sombra da Erdtree',
        image: '/assets/images/elden.jpg'
      },
      {
        title: 'Final Fantasy VII Rebirth (Renascimento)',
        image: '/assets/images/final-fantasy.avif'
      }
    ];
  }
}

