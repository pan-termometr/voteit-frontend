import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Voteit } from 'src/app/model/voteit';
import { VoteitsApiService } from 'src/app/services/api/voteits-api.service';

@Injectable({
  providedIn: 'root'
})
export class VoteitResolver implements Resolve<Voteit> {

  constructor(
    private voteitsApiService: VoteitsApiService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Voteit> {
    return this.voteitsApiService.getById(route.paramMap.get('id')!);
  }
}
