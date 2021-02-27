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
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';

import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RecaptchaModule } from "ng-recaptcha";
import { AdmissionProfileComponent } from './admission-profile/admission-profile.component';
import { ChangeKeyComponent } from './change-key/change-key.component';
import { NewUserComponent } from './new-user/new-user.component';
import { KeyOtpComponent } from './key-otp/key-otp.component';
import { DetailsUserComponent } from './details-user/details-user.component';
// import {NgRecaptcha3Service} from 'ng-recaptcha3';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component:  LoginComponent },
  { path: 'recover-pass', component:  RecoverPasswordComponent },
  { path: 'change-key', component:  ChangeKeyComponent },
  { path: 'admission', component:  AdmissionProfileComponent },
  { path: 'new-user', component:  NewUserComponent },
  { path: 'key-otp', component:  KeyOtpComponent },
  { path: 'details-user', component:  DetailsUserComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoverPasswordComponent,
    AdmissionProfileComponent,
    ChangeKeyComponent,
    NewUserComponent,
    KeyOtpComponent,
    DetailsUserComponent,
   
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
    MatCheckboxModule,
    MatDividerModule
    // NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



