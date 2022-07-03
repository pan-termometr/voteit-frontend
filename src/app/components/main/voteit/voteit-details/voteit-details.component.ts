import { Component, Input } from '@angular/core';
import { Voteit } from 'src/app/model/voteit';

@Component({
  selector: 'app-voteit-details',
  templateUrl: './voteit-details.component.html',
  styleUrls: ['./voteit-details.component.scss']
})
export class VoteitDetailsComponent {

  @Input()
  voteit?: Voteit;

}
