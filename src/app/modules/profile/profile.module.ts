import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PageComponent } from './components/page/page.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditNameComponent } from './components/edit-name/edit-name.component';
import { EditEmailComponent } from './components/edit-email/edit-email.component';
import { EditPasswordComponent } from './components/edit-password/edit-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { MatDialogModule } from '@angular/material/dialog';
// import {  RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PageComponent,
    ViewProfileComponent,
    EditNameComponent,
    EditEmailComponent,
    EditPasswordComponent,
    SubscriptionComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatDialogModule,
    // RouterModule
  ]
})
export class ProfileModule { 
}
