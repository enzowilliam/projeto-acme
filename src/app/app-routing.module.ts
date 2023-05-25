import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { ClientsTableComponent } from './views/clients-table/clients-table.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'clients', component: ClientsTableComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
