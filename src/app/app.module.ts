import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/commons/navbar/navbar.component';
import { VoteitsComponent } from './components/main/voteits/voteits.component';
import { VoteitComponent } from './components/main/voteits/voteit/voteit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VoteitsComponent,
    VoteitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
