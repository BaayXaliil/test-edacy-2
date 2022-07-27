import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routine.module';
import { ContentComponent } from './content.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';



@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    ComponentsModule
  ]
})
export class ContentModule { }
