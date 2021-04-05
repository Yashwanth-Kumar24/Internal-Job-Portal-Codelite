import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AppComponent } from './app.component';
import { AppliedjobsComponent } from './appliedjobs/appliedjobs.component';
import { CusnavbarComponent } from './cusnavbar/cusnavbar.component';
import { DemoComponent } from './demo/demo.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { HrappliedjobsComponent } from './hrappliedjobs/hrappliedjobs.component';
import { HrhomeComponent } from './hrhome/hrhome.component';
import { LoginComponent } from './login/login.component';
import { ProjectmanagerappliedjobsComponent } from './projectmanagerappliedjobs/projectmanagerappliedjobs.component';
import { ProjectmanagerhomeComponent } from './projectmanagerhome/projectmanagerhome.component';
import { RegisterComponent } from './register/register.component';  
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'appliedJobs', component:AppliedjobsComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomecomponentComponent,canActivate:[AuthGuard]},
  {path:'hr',component : HrhomeComponent,canActivate:[AuthGuard]},
  {path:'hr/allAppliedJobs',component:HrappliedjobsComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdminhomeComponent,canActivate:[AuthGuard]},
  {path:'demo',component:DemoComponent,canActivate:[AuthGuard]},
  {path:'projectmanager',component:ProjectmanagerhomeComponent,canActivate:[AuthGuard]},
  {path:'projectmanager/appliedJobs',component:ProjectmanagerappliedjobsComponent,canActivate:[AuthGuard]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }