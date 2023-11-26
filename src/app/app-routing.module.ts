import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantRegistrationComponent } from './pages/merchant/merchant-registration/merchant-registration.component';
import { HomeComponent } from './pages/home/home.component';
import { MinistryDashboardComponent } from './pages/ministry/ministry-dashboard/ministry-dashboard.component';
import { MinistryReviewComponent } from './pages/ministry/ministry-review/ministry-review.component';

const routes: Routes = [
  {path: "", title: "Promo Tourism | Home", component: HomeComponent},
  {path: "ministry", component:MinistryDashboardComponent},
  {path: "ministry/manage", component:MinistryReviewComponent},
  {path: "merchant/register", component: MerchantRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
