import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { CalculateComponent } from './user/calculate/calculate.component';
import { FindRootComponent } from './user/calculate/find-root/find-root.component';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { CoreModule, AuthGuard, RoleType } from "./core";
import { AdminComponent } from './admin/admin.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { ViewCompaniesComponent } from './admin/view-companies/view-companies.component';
import { EditCompanyComponent } from './admin/view-companies/edit-company/edit-company.component';
import { AddTransportComponent } from './admin/add-transport/add-transport.component';
import { ViewTransportsComponent } from './admin/view-transports/view-transports.component';
import { AddMapComponent } from './admin/add-map/add-map.component';
import { ViewMapsComponent } from './admin/view-maps/view-maps.component';

const routes: Routes = [
  {
    path: "auth",
    component: AuthComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path:"addmap",
        component: AddMapComponent
      },
      {
        path:"viewmaps",
        component: ViewMapsComponent,

      },
      {
        path: "addtransport",
        component: AddTransportComponent
      },
      {
        path: "viewtransports",
        component: ViewTransportsComponent,
      },
      {
        path: "addcompany",
        component: AddCompanyComponent
      },
      {
        path: "viewcompanies",
        component: ViewCompaniesComponent,
        children: [
          {
            path: "editcompany",
            component: EditCompanyComponent,
          }
        ]
      }
    ]
  },
  {
    path: "user",
    component: UserComponent,
    // canActivate: [AuthGuard],
    // data: { roles: [RoleType.User] },
    children: [
      {
        path: "calculate",
        component: CalculateComponent,
        children: [
          {
            path: "findroot",
            component: FindRootComponent
          }
        ]
      },
      {
        path: 'orders',
        component: UserOrderComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
