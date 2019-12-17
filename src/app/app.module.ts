import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ServicesComponent } from './services/services.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaseStudiesComponent,
    ServicesComponent,
    ExpertiseComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
