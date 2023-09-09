import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogRegistroPageRoutingModule } from './log-registro-routing.module';

import { LogRegistroPage } from './log-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogRegistroPageRoutingModule
  ],
  declarations: [LogRegistroPage]
})
export class LogRegistroPageModule {}
