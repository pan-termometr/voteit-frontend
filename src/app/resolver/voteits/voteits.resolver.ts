import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Voteit } from 'src/app/model/voteit';
import { VoteitsApiService } from 'src/app/services/api/voteits-api.service';

@Injectable({
  providedIn: 'root'
})
export class VoteitsResolver implements Resolve<Voteit[]> {

  constructor(
    private voteitsApiService: VoteitsApiService
  ) { }
  
  resolve(): Observable<Voteit[]> {
    return this.voteitsApiService.getAll();
  }
}
