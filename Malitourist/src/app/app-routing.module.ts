import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegionComponent } from './pages/region/region.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'region', component: RegionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
