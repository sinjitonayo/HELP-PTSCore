import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { ReactiveFormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { NoopAnimationsModule } from "@angular/platform-browser/animations"
import { MerchantRegistrationFormComponent } from "./components/forms/merchant-registration-form/merchant-registration-form.component"
import { MerchantRegistrationComponent } from "./pages/merchant/merchant-registration/merchant-registration.component"
import { HomeComponent } from "./pages/home/home.component"
import { DefaultHeaderComponent } from "./components/header/default-header/default-header.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoaderComponent } from './loader/loader.component';
import { MinistryDashboardContentComponent } from './components/content/ministry/ministry-dashboard-content/ministry-dashboard-content.component';
import { MinistrySidebarComponent } from './components/header/ministry/ministry-sidebar/ministry-sidebar.component';
import { MinistryDashboardComponent } from './pages/ministry/ministry-dashboard/ministry-dashboard.component';
import { MinistryReviewComponent } from './pages/ministry/ministry-review/ministry-review.component';
import { MinistryManageMerchantComponent } from './components/content/ministry/ministry-manage-merchant/ministry-manage-merchant.component'

@NgModule({
  declarations: [
    AppComponent,
    MerchantRegistrationFormComponent,
    MerchantRegistrationComponent,
    HomeComponent,
    DefaultHeaderComponent,
    MinistryDashboardContentComponent,
    MinistrySidebarComponent,
    MinistryDashboardComponent,
    MinistryReviewComponent,
    MinistryManageMerchantComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    LoaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
