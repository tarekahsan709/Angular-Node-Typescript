import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import RoutesUrl from 'client/app/shared/util/routes-url';
import ToastMessage from 'client/app/shared/util/toast-message';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = new FormControl('', [
    Validators.email,
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    if (this.auth.hasAuthenticated()) {
    }
  }

  buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
  }

  setClassEmail(): object {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }

  setClassPassword(): object {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  login(): void {
    this.auth.login(this.loginForm.value).subscribe((res) => {
      this.toastr.success(ToastMessage.SUCCESSFULL_LOGIN);
    });
  }
}
