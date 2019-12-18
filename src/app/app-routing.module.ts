import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ServicesComponent } from './services/services.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import {MobileAppsComponent} from './services/mobile-apps/mobile-apps.component';
import {WebServiceComponent} from './services/web-service/web-service.component';
import {AugmentedRealityComponent} from './services/augmented-reality/augmented-reality.component';
import {UxUiDesignComponent} from './services/ux-ui-design/ux-ui-design.component';
import {DevelopmentComponent} from './services/development/development.component';


const routes: Routes = [
  { path: '',
    component: HomeComponent,
    data: { title: 'Test case' }
  },
  { path: 'case_studies',
    component: CaseStudiesComponent,
    data: { title: 'Case studies page' }
  },
  { path: 'services',
    component: ServicesComponent,
    data: { title: 'Services page' }
  },
  { path: 'expertise',
    component: ExpertiseComponent,
    data: { title: 'Expertise page' }
  },
  { path: 'about',
    component: AboutComponent,
    data: { title: 'About page' }
  },
  { path: 'contacts',
    component: ContactsComponent,
    data: { title: 'Contacts page' }
  },
  { path: 'services/mobile_apps',
    component: MobileAppsComponent,
    data: { title: 'Mobile apps page' }
  },
  { path: 'services/web_srvices',
    component: WebServiceComponent,
    data: { title: 'Web services page' }
  },
  { path: 'services/augmented_reality',
    component: AugmentedRealityComponent,
    data: { title: 'Augmented reality page' }
  },
  { path: 'services/ux_ui_design',
    component: UxUiDesignComponent,
    data: { title: 'UX/UI design page' }
  },
  { path: 'services/development',
    component: DevelopmentComponent,
    data: { title: 'Development page' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
