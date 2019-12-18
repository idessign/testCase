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
import { MobileAppsComponent } from './services/mobile-apps/mobile-apps.component';
import { WebServiceComponent } from './services/web-service/web-service.component';
import { AugmentedRealityComponent } from './services/augmented-reality/augmented-reality.component';
import { UxUiDesignComponent } from './services/ux-ui-design/ux-ui-design.component';
import { DevelopmentComponent } from './services/development/development.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaseStudiesComponent,
    ServicesComponent,
    ExpertiseComponent,
    AboutComponent,
    ContactsComponent,
    MobileAppsComponent,
    WebServiceComponent,
    AugmentedRealityComponent,
    UxUiDesignComponent,
    DevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
