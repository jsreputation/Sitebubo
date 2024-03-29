import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { CountoModule } from 'angular2-counto';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CountoModule,
    DashboardPageRoutingModule,
    NgCircleProgressModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
