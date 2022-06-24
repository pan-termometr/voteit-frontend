import { Component, Input, OnInit } from '@angular/core';
import { Voteit } from 'src/app/model/voteit';

@Component({
  selector: 'app-voteit-preview',
  templateUrl: './voteit-preview.component.html',
  styleUrls: ['./voteit-preview.component.scss']
})
export class VoteitPreviewComponent implements OnInit {

  @Input() voteit! : Voteit;

  constructor() { }

  ngOnInit(): void {
  }

}
