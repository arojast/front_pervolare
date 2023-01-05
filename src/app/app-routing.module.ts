import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './helpers/auth.guard';
import { SecretComponent } from './secret/secret.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: SecretComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
