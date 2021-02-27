import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, LogoutComponent, RegisterComponent],
  imports: [CommonModule, AccountRoutingModule, SharedModule],
  providers: [],
})
export class AccountModule {}
