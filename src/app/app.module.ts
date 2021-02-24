import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RecaptchaModule } from "ng-recaptcha";
// import { RegisterComponent } from './change-key/change-key.component';
import { AdmissionProfileComponent } from './admission-profile/admission-profile.component';
import { ChangeKeyComponent } from './change-key/change-key.component';
// import {NgRecaptcha3Service} from 'ng-recaptcha3';



const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component:  LoginComponent },
  { path: 'recover-pass', component:  RecoverPasswordComponent },
  { path: 'change-key', component:  ChangeKeyComponent },
  { path: 'admission', component:  AdmissionProfileComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoverPasswordComponent,
    // RegisterComponent,
    AdmissionProfileComponent,
    ChangeKeyComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    MatIconModule,
    RecaptchaModule,
    // NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



