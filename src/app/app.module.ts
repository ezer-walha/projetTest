import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserJobComponent } from './components/browser-job/browser-job.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { ContactComponent } from './components/contact/contact.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { LoginComponent } from './components/login/login.component';
import { CandidatureSpontaneeComponent } from './components/candidature-spontanee/candidature-spontanee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidatureDetailsComponent } from './components/candidature-details/candidature-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BrowserJobComponent,
    CandidateComponent,
    ContactComponent,
    JobDetailsComponent,
    PostJobComponent,
    LoginComponent,
    CandidatureSpontaneeComponent,
    CandidatureDetailsComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
