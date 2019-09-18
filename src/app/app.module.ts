import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { TeamAComponent } from './team-a/team-a.component';
import { TeamBComponent } from './team-b/team-b.component';
import { MatchliveComponent } from './matchlive/matchlive.component';
import { PlayerareaComponent } from './playerarea/playerarea.component';
import { SummaryComponent } from './summary/summary.component';
import { ScardComponent } from './scard/scard.component';
import { CommentsComponent } from './comments/comments.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent,
    TeamAComponent,
    TeamBComponent,
    MatchliveComponent,
    SummaryComponent,
    PlayerareaComponent,
    ScardComponent,
    CommentsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
