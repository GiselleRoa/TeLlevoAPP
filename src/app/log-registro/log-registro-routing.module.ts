import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogRegistroPage } from './log-registro.page';

const routes: Routes = [
  {
    path: '',
    component: LogRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogRegistroPageRoutingModule {}
