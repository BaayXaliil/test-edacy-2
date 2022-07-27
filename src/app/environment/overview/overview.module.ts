import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewRoutingModule } from './overview-routine.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverviewComponent } from './overview.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';



@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverviewRoutingModule,
    ComponentsModule
  ]
})
export class OverviewModule { }
