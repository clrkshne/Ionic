import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminsigninPage } from './adminsignin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminsigninPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsigninPageRoutingModule {}
