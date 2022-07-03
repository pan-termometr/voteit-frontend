import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/commons/navbar/navbar.component';
import { VoteitsComponent } from './components/main/voteits/voteits.component';
import { VoteitPreviewComponent } from './components/main/voteits/voteit-preview/voteit-preview.component';
import { VoteitComponent } from './components/main/voteit/voteit.component';
import { MainComponent } from './components/main/main.component';
import { UrlTitlePipe } from './pipe/url-title.pipe';
import { VoteitDetailsComponent } from './components/main/voteit/voteit-details/voteit-details.component';
import { VoteitRelatedComponent } from './components/main/voteit/voteit-related/voteit-related.component';
import { VoteitCommentsComponent } from './components/main/voteit/voteit-comments/voteit-comments.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VoteitsComponent,
    VoteitPreviewComponent,
    VoteitComponent,
    MainComponent,
    UrlTitlePipe,
    VoteitDetailsComponent,
    VoteitRelatedComponent,
    VoteitCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
