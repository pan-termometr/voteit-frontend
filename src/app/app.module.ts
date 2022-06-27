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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VoteitsComponent,
    VoteitPreviewComponent,
    VoteitComponent,
    MainComponent,
    UrlTitlePipe
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
