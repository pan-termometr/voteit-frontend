import { Component, Input, OnInit } from '@angular/core';
import { Voteit } from 'src/app/model/voteit';

@Component({
  selector: 'app-voteit',
  templateUrl: './voteit.component.html',
  styleUrls: ['./voteit.component.scss']
})
export class VoteitComponent implements OnInit {

  @Input() voteit! : Voteit;

  constructor() { }

  ngOnInit(): void {
  }

}
