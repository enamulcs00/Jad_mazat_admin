import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoolDashRoutingModule } from "./cooldash-routing.module";
import { CoolDashComponent } from "./cooldash.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FullComponent } from "./components/full/full.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
 import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MaterialModule } from "./pages/material/material.module";

import { FusionChartsModule } from "angular-fusioncharts";

// Load FusionCharts
import * as FusionCharts from "fusioncharts";
// Load Charts module
import * as Charts from "fusioncharts/fusioncharts.charts";
// Load fusion theme
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import * as TimeSeries from "fusioncharts/fusioncharts.timeseries"; // Import timeseries

import { NgxStarRatingModule } from "ngx-star-rating";
import { ChangePasswordComponent } from "./pages/change-password/change-password.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { AdminSettingsComponent } from "./pages/admin-settings/admin-settings.component";

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme, TimeSeries);
@NgModule({
  declarations: [
    CoolDashComponent,
    FooterComponent,
    FullComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ChangePasswordComponent,
    ProfileComponent,
    AdminSettingsComponent,
    // NumberOnlyDirective
  ],
  exports: [
    // NumberOnlyDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoolDashRoutingModule,
    ChartsModule,
    MaterialModule,
    FusionChartsModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoolDashModule {}
