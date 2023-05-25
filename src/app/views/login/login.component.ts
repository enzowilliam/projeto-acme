import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public form!: FormGroup;

  user: string = '';
  password: string = '';
  passwordError: boolean = false;
  userError: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    {
      this.form.controls['user'].errors?.['required']
        ? (this.userError = true)
        : (this.userError = false);
    }
    {
      this.form.controls['password'].errors?.['required']
        ? (this.passwordError = true)
        : (this.passwordError = false);
    }

    if (this.form.valid) {
      this.router.navigate(['/clients']);
    }
  }
}
