import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  formBlog: FormGroup;
  errorMessage: string;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {

    this.initForm();
  }

  initForm() {

    this.formBlog = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", Validators.required]
    });

  }

  onSubmit() {

    const email = this.formBlog.get("email").value;
    const password = this.formBlog.get("password").value;

    this.authService.signIn(email, password).then(
      () => {
        this.router.navigate(["/blog"])
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
