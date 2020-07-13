import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-list/post-form/post-form.component';
import { SinglePostComponent } from './post-list/single-post/single-post.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: "posts",
    canActivate: [AuthGuardService],
    component: PostListComponent,
  },
  {
    path: "",
    redirectTo: "posts",
    canActivate: [AuthGuardService],
    pathMatch: "full"
  },
  {
    path: "auth/signin",
    component: SignInComponent,
  },
  {
    path: "auth/signup",
    component: SignUpComponent
  },
  {
    path: "post/new",
    canActivate: [AuthGuardService],
    component: PostFormComponent
  },
  {
    path: "post/view/:id",
    component: SinglePostComponent
  },
  {
    path: "**",
    redirectTo: "posts",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
