import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


const routes: Routes = [
  {
    path: "",
    data: {
      title: ""
    },
    children: [
      {
        path: "term&conditions",
        component: TermsAndConditionsComponent,
        data: {
          title: ""
        }
      },
      {
        path: "privacypolicy",
        component: PrivacyPolicyComponent,
        data: {
          title: ""
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsPagesRoutingModule { }
