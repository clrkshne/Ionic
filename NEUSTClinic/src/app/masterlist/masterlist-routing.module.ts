import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterlistPage } from './masterlist.page';

const routes: Routes = [
  {
    path: '',
    component: MasterlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterlistPageRoutingModule {}
