import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameAwardsService {

  private apiUrl = 'https://api.rawg.io/api/games';

  constructor(private http: HttpClient) { }

  // Método GET para obter a lista de jogos
  getGames(): Observable<any> {
    const params = new HttpParams()
      .set('key', 'f52096a4a99f418d9986094b34202f04')
      .set('language', 'pt'); 
    return this.http.get<any>(this.apiUrl, { params });
  }

  // Método GET para obter detalhes de um jogo específico
  getGameDetails(id: number): Observable<any> {
    const params = new HttpParams()
      .set('key', 'f52096a4a99f418d9986094b34202f04')
      .set('language', 'pt');
    return this.http.get<any>(`${this.apiUrl}/${id}`, { params });
  }
}
