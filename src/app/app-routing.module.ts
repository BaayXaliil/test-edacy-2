import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", 
    redirectTo: "/create-program", 
    pathMatch: "full"
  },
  {
    path: "manage-content",
    loadChildren: () => import('./environment/content/content.module').then( m => m.ContentModule)
  },
  {
    path: 'create-program',
    loadChildren: ()=> import('./environment/overview/overview.module').then(m => m.OverviewModule)
  },
  {
    path: 'add-week',
    loadChildren: () => import('./environment/add-week/add-week.module').then( m => m.AddWeekModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
