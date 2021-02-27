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
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  email = new FormControl('', [
    Validators.email,
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private toastr: ToastrService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    if (this.auth.hasAuthenticated()) {
    }
  }

  buildForm(): void {
    this.registerForm = this.formBuilder.group({
      name: this.name,
      email: this.email,
      password: this.password,
    });
  }

  setClassName(): object {
    return { 'has-danger': !this.name.pristine && !this.name.valid };
  }

  setClassEmail(): object {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }

  setClassPassword(): object {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  register(): void {
    this.auth.register(this.registerForm.value).subscribe((res) => {
      this.toastr.success(ToastMessage.SUCCESSFULL_REGISTRATION);
      this.router.navigateByUrl(RoutesUrl.LOGIN);
    });
  }
}
