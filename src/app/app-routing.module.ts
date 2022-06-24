import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoteitComponent } from './components/main/voteit/voteit.component';
import { VoteitsComponent } from './components/main/voteits/voteits.component';

const routes: Routes = [
  { path: '', redirectTo: '/voteit', pathMatch: 'full' },
  { path: 'voteit', component: VoteitsComponent },
  { path: ':id/:title', component: VoteitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
