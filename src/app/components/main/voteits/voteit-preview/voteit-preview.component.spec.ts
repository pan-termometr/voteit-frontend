import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UrlTitlePipe } from 'src/app/pipe/url-title.pipe';
import { Voteit } from 'src/app/model/voteit';
import { VoteitPreviewComponent } from './voteit-preview.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LowerCasePipe } from '@angular/common';

describe('VoteitPreviewComponent', () => {
  let component: VoteitPreviewComponent;
  let fixture: ComponentFixture<VoteitPreviewComponent>;
  let urlTitlePipe: UrlTitlePipe;
  let lowerCasePipe: LowerCasePipe;
  let voteit: Voteit;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoteitPreviewComponent, UrlTitlePipe],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteitPreviewComponent);
    component = fixture.componentInstance;
    voteit = {
      id: 1,
      tags: ["travelling", "world"],
      title: "Autostopem Dookoła Świata",
      description: "Autostopem Dookoła Świata, czyli pierwsza w Polsce podróż dookoła świata autostopem i jachtostopem bez płacenia za transport (i noclegi)",
      url: "https://autostopemdookolaswiata.pl",
      thumbnail: "https://autostopemdookolaswiata.pl/wp-content/uploads/logo.jpg",
      votesUp: 1000,
      votesDown: 0,
      isForAdult: false,
      creationDate: "2022-06-05 13:00:00",
      author: "termometr"
    }
    component.voteit = voteit;
    urlTitlePipe = new UrlTitlePipe;
    lowerCasePipe = new LowerCasePipe;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display voteit', () => {
    // when
    fixture.detectChanges();
    // then
    const votesUp = document.querySelector('.votes-up')?.textContent
    const thumbnailSrc = document.querySelector('.voteit-thumbnail > img')?.getAttribute('src')
    const thumbnailAlt = document.querySelector('.voteit-thumbnail > img')?.getAttribute('alt')
    const title = document.querySelector('.voteit-url')?.textContent
    const url = document.querySelector('.voteit-url')?.getAttribute('href')
    const author = document.querySelector('.author')?.textContent
    const tags = document.querySelectorAll('.tag')
    const description = document.querySelector('.voteit-description')?.textContent

    expect(votesUp).toEqual(String(voteit.votesUp));
    expect(thumbnailSrc).toEqual('assets/voteit-thumbnail/' + voteit.thumbnail);
    expect(thumbnailAlt).toEqual(voteit.title)
    expect(title).toEqual(voteit.title)
    expect(url).toEqual('/' + voteit.id + '/' + lowerCasePipe.transform(urlTitlePipe.transform(voteit.title)))
    expect(author).toEqual('@' + voteit.author)
    expect(tags[0].textContent).toEqual('#' + voteit.tags[0])
    expect(tags[1].textContent).toEqual('#' + voteit.tags[1])
    expect(description).toEqual(voteit.description)
  });
});
