import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantRegistrationComponent } from './pages/merchant/merchant-registration/merchant-registration.component';

const routes: Routes = [
  {path: "", component: MerchantRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
