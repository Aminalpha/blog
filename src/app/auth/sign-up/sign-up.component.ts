import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  formBlog: FormGroup;
  errorMessage: string;
  hide = true;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.initForm();

  }

  initForm() {

    this.formBlog = this.formBuilder.group({
      email: ["",[Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern(/[0-9a-zA-Z]{7,}/)]],
    });

  }

  onSubmit() {

    const email = this.formBlog.get("email").value;
    const password = this.formBlog.get("password").value;

    this.authService.signUp(email, password).then(
      () => {
        this.router.navigate(["/blog"]);
      },

      (error) => {
        this.errorMessage = error;
      }

    );

  }

}
