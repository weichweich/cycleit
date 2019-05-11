import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'detail/:id', loadChildren: './profile/bicycle-details/bicycle-details.module#BicycleDetailsPageModule' },
  { path: 'addbike', loadChildren: './profile/bicycle-add/bicycle-add.module#BicycleAddPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
