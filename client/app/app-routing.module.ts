import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((module) => module.AccountModule),
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
