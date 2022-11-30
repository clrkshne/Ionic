import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminsigninPageRoutingModule } from './adminsignin-routing.module';

import { AdminsigninPage } from './adminsignin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminsigninPageRoutingModule
  ],
  declarations: [AdminsigninPage]
})
export class AdminsigninPageModule {}
