import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedcertPageRoutingModule } from './medcert-routing.module';

import { MedcertPage } from './medcert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedcertPageRoutingModule
  ],
  declarations: [MedcertPage]
})
export class MedcertPageModule {}
