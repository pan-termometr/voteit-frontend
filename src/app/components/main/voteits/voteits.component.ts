import { Component, OnInit } from '@angular/core';
import { Voteit } from 'src/app/model/voteit';

@Component({
  selector: 'app-voteits',
  templateUrl: './voteits.component.html',
  styleUrls: ['./voteits.component.scss']
})
export class VoteitsComponent implements OnInit {

  readonly voteits: Voteit[] = [
    {
      id : 1,
      tags : ["travelling", "world"],
      title : "Autostopem Dookoła Świata",
      description : "Autostopem Dookoła Świata, czyli pierwsza w Polsce podróż dookoła świata autostopem i jachtostopem bez płacenia za transport (i noclegi)",
      url : "https://autostopemdookolaswiata.pl",
      picture : "https://autostopemdookolaswiata.pl/wp-content/uploads/logo.jpg",
      votesUp : 1000,
      votesDown : 0,
      isForAdult : false,
      creationDate : "2022-06-05 13:00:00",
      author : "termometr"
    },
    {
      id: 2,
      tags: ["politics", "world"],
      title: "Raport o stanie świata",
      description: "W formie podcastu albo programów na żywo z różnych miejsc na ziemi. Formaty Raportu. Raport o stanie świata to nie pojedyncza audycja, tylko cała rodzina",
      url: "https://raportostanieswiata.pl/",
      picture: "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/3196947/3196947-1600241326561-0c8ecb8ce4157.jpg",
      votesUp: 930,
      votesDown: 13,
      isForAdult: false,
      creationDate: "2022-06-05 15:00:00",
      author: "termometr"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
