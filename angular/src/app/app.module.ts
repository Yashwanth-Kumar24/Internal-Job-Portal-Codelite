import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppliedjobsComponent } from './appliedjobs/appliedjobs.component';
import { CusnavbarComponent } from './cusnavbar/cusnavbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HrhomeComponent } from './hrhome/hrhome.component';
import { HrappliedjobsComponent } from './hrappliedjobs/hrappliedjobs.component';

import { HrnavbarComponent } from './hrnavbar/hrnavbar.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectmanagerhomeComponent } from './projectmanagerhome/projectmanagerhome.component';
import { ProjectmanagerappliedjobsComponent } from './projectmanagerappliedjobs/projectmanagerappliedjobs.component';

@NgModule({
  declarations: [
    AppComponent,
    AppliedjobsComponent,
    CusnavbarComponent,
    CusnavbarComponent,
    HomecomponentComponent,
    AdminhomeComponent,
    HrhomeComponent,
    HrappliedjobsComponent,
    HrnavbarComponent,
    AdminnavbarComponent,
    LoginComponent,
    RegisterComponent,
    DemoComponent,
    ProjectmanagerhomeComponent,
    ProjectmanagerappliedjobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
