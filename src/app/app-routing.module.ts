import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoteitComponent } from './components/main/voteit/voteit.component';
import { VoteitsComponent } from './components/main/voteits/voteits.component';
import { VoteitResolver } from './resolver/voteit/voteit.resolver';
import { VoteitsResolver } from './resolver/voteits/voteits.resolver';

const routes: Routes = [
  { path: '*', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: VoteitsComponent, resolve: {
    voteits: VoteitsResolver
  } },
  {
    path: ':id/:title', component: VoteitComponent, resolve: {
      voteit: VoteitResolver
    } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
