import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/commonservice/auth.guard";
import { AuthguardGuardGuard } from "./commonservice/authguard-guard.guard";
import { ResetPasswordComponent } from './forgot-password/reset-password.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "",
    canActivate: [AuthguardGuardGuard],
    loadChildren: () =>
      import("./cooldash/cooldash.module").then(m => m.CoolDashModule)
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: "reset-password",
    component:ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
