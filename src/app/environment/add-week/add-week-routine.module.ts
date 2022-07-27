import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWeekComponent } from './add-week.component';

const routes: Routes = [
    {path: '', component: AddWeekComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddWeekRoutingModule { }
