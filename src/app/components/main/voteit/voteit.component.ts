import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voteit } from 'src/app/model/voteit';

@Component({
  selector: 'app-voteit',
  templateUrl: './voteit.component.html',
  styleUrls: ['./voteit.component.scss']
})
export class VoteitComponent implements OnInit {

  voteit?: Voteit;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ voteit }) => {
      this.voteit = voteit;
    })
  }

}
