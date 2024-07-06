import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindLayoutComponent } from './layout/find-layout/find-layout.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: '',
    component: FindLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layout/find-layout/find-layout.module').then(m => m.FindLayoutModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
