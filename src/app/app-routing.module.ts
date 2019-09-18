import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { TeamAComponent } from './team-a/team-a.component';
import { TeamBComponent } from './team-b/team-b.component';
import { SummaryComponent } from './summary/summary.component';
import { ScardComponent } from './scard/scard.component';
import { CommentsComponent } from './comments/comments.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {
    path:"summary",
    component:SummaryComponent
  },
  {
    path:"scard",
    component:ScardComponent
  },
  {
    path:"comments",
    component:CommentsComponent
  },
  {
    path:"news",
    component:NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
