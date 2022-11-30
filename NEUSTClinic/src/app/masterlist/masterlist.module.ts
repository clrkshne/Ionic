import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasterlistPageRoutingModule } from './masterlist-routing.module';

import { MasterlistPage } from './masterlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasterlistPageRoutingModule
  ],
  declarations: [MasterlistPage]
})
export class MasterlistPageModule {}
