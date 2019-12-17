import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ServicesComponent } from './services/services.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
