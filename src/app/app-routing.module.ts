import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { RecoverPasswordComponent } from './authentication/recover-password/recover-password.component';
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
import { ManageUserComponent } from './manage-user/manage-user.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';

import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'recover-pass',
        component: RecoverPasswordComponent
      },
      {
        path: 'change-key',
        component: ChangeKeyComponent
      },
      {
        path: 'admission',
        component: AdmissionProfileComponent
      },
      {
        path: 'key-otp',
        component: KeyOtpComponent
      },
      {
        path: 'manage-profile', component: ManageProfileComponent
      },
      {
        path: 'manage-roles',
        component: ManageRolesComponent
      },
      {
        path: 'details-user',
        component: DetailsUserComponent
      },
      {
        path: 'new-user',
        component: NewUserComponent
      },
      {
        path: 'manage-user',
        component: ManageUserComponent
      },
    ]
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'manage-profile', component: ManageProfileComponent
      },
      {
        path: 'manage-roles',
        component: ManageRolesComponent
      },
      {
        path: 'details-user',
        component: DetailsUserComponent
      },
      {
        path: 'new-user',
        component: NewUserComponent
      },
      {
        path: 'key-otp',
        component: KeyOtpComponent
      },
    ]
  },
  // { path: 'new-user', component: NewUserComponent },
  // { path: 'key-otp', component: KeyOtpComponent },
  // { path: 'details-user', component: DetailsUserComponent },
  { path: 'top-bar', component: TopBarComponent },
  // { path: 'manage-profile', component: ManageProfileComponent },
  // { path: 'manage-roles', component: ManageRolesComponent },
  { path: 'side-bar', component: SideBarComponent },
  { path: 'footer', component: FooterComponent },
  {
    path: 'modal',
    component: EditModalComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
