import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";

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
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';

import { NgChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { LoginComponent } from './authentication/login/login.component';
import { RecoverPasswordComponent } from './authentication/recover-password/recover-password.component';
import { RecaptchaModule } from "ng-recaptcha";
import { AdmissionProfileComponent } from './admission-profile/admission-profile.component';
import { ChangeKeyComponent } from './authentication/change-key/change-key.component';
import { NewUserComponent } from './new-user/new-user.component';
import { KeyOtpComponent } from './key-otp/key-otp.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { TopBarComponent } from './layout/components/top-bar/top-bar.component';
import { SideBarComponent } from './layout/components/side-bar/side-bar.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { FunctionalitiesComponent } from './functionalities/functionalities.component';
import { FunctionalitiesRoleComponent } from './functionalities-role/functionalities-role.component';
// import {NgRecaptcha3Service} from 'ng-recaptcha3';

import { ChartsComponent } from './charts/charts.component';
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
    ManageProfileComponent,
    TopBarComponent,
    SideBarComponent,
    FooterComponent,
    ManageRolesComponent,
    LayoutComponent,
    HeaderComponent,
    DashboardLayoutComponent,
    DialogDeleteComponent,
    ManageUserComponent,
    EditModalComponent,
    FunctionalitiesComponent,
    FunctionalitiesRoleComponent,
    ChartsComponent,
   
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
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
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgChartsModule,
    MatCardModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



