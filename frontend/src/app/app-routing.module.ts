import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/container/home/home.component';
import { AllSectionsComponent } from './components/container/all-sections/all-sections.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'all-sections', component: AllSectionsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'**', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
