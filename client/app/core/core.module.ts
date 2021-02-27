import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';

import { SharedModule } from '../shared/shared.module';
import { AuthInterceptor } from './interceptors/auth.interceptors';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  exports: [NavbarComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
})
export class CoreModule {}
