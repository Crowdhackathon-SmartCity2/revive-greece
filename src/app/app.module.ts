import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { SingleQuestionComponent } from './components/single-question/single-question.component';
import { McTestComponent } from './components/mc-test/mc-test.component';
import { TestStartComponent } from './components/test-start/test-start.component';
import { McAnnounceComponent } from './components/mc-announce/mc-announce.component';
import { McProfileComponent } from './components/mc-profile/mc-profile.component';
import { McAnnouncementsComponent } from './components/mc-announcements/mc-announcements.component';
import { McHomeComponent } from './components/mc-home/mc-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SingleQuestionComponent,
    McTestComponent,
    TestStartComponent,
    McAnnounceComponent,
    McProfileComponent,
    McAnnouncementsComponent,
    McHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
