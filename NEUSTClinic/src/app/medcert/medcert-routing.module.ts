import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedcertPage } from './medcert.page';

const routes: Routes = [
  {
    path: '',
    component: MedcertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedcertPageRoutingModule {}
