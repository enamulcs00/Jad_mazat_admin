import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CmsPagesRoutingModule } from './cms-pages-routing.module'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    TermsAndConditionsComponent, 
    PrivacyPolicyComponent, ContactComponent, FaqComponent
  ],
  imports: [
    CommonModule,
    CKEditorModule,
    CmsPagesRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class CmsPagesModule { }
