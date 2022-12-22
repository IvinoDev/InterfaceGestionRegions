import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AddregionComponent } from './pages/admin/dashboard/regioncrud/addregion/addregion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegiondashComponent } from './pages/admin/dashboard/regioncrud/regiondash/regiondash.component';
import { DetailregionComponent } from './pages/detailregion/detailregion.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegionComponent } from './pages/region/region.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'region', component: RegionComponent},
  {path: 'detailregion/:id', component: DetailregionComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'regiondash', component: RegiondashComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'addregion', component: AddregionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
