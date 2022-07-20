import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './environment/content/content.component';
import { OverviewComponent } from './environment/overview/overview.component';

const routes: Routes = [
  {path: "", redirectTo: "/create-program", pathMatch: "full"},
  {path: "create-program", component: OverviewComponent},
  {path: "manage-content", component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
