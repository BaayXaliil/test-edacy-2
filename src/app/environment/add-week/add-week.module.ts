import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddWeekComponent } from './add-week.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { AddWeekRoutingModule } from './add-week-routine.module';



@NgModule({
  declarations: [AddWeekComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AddWeekRoutingModule
  ]
})
export class AddWeekModule { }
