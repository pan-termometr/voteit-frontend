import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voteit } from 'src/app/model/voteit';

@Injectable({
  providedIn: 'root'
})
export class VoteitsApiService {
  private voteitsApiUrl: string = 'http://localhost:8081/api/v1/voteits'

  constructor(readonly httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Voteit[]>(`${this.voteitsApiUrl}`);
  }

  getById(id: string) {
    return this.httpClient.get<Voteit>(`${this.voteitsApiUrl}/${id}`);
  }
}
