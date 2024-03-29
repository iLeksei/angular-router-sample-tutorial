import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageCrisesComponent} from "./manage-crises/manage-crises.component";
import {ManageHeroesComponent} from "./manage-heroes/manage-heroes.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthGuard} from "../auth/auth.guard";

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        canActivateChild: [AuthGuard],
        path: '',
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
