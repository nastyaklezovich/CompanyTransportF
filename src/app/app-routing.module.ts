import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {UserComponent} from './user/user.component';
import {CalculateComponent} from './user/calculate/calculate.component';
import {FindRootComponent} from './user/calculate/find-root/find-root.component';
import {UserOrderComponent} from './user/user-order/user-order.component';
import {AuthGuard, RoleType} from "./core";
import {AdminComponent} from './admin/admin.component';
import {AddCompanyComponent} from './admin/add-company/add-company.component';
import {ViewCompaniesComponent} from './admin/view-companies/view-companies.component';
import {EditCompanyComponent} from './admin/view-companies/edit-company/edit-company.component';
import {AddTransportComponent} from './admin/add-transport/add-transport.component';
import {ViewTransportsComponent} from './admin/view-transports/view-transports.component';
import {ViewMapsComponent} from './admin/view-maps/view-maps.component';
import {RegistrationComponent} from './registration/registration.component';
import {AddUserComponent} from './admin/add-user/add-user.component';
import {ViewUsersComponent} from './admin/view-users/view-users.component';
import {ParentComponent} from './admin/parent/parent.component';

const routes: Routes = [
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "auth",
    component: AuthComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [RoleType.Admin]
    },
    children: [
      {
        path: "parent",
        component: ParentComponent
      },
      {
        path: "viewmaps",
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
      },
      {
        path: "adduser",
        component: AddUserComponent,
      },
      {
        path: "viewusers",
        component: ViewUsersComponent
      }

    ]
  },
  {
    path: "user",
    component: UserComponent,
    canActivate: [AuthGuard],
    data: {roles: [RoleType.User]},
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
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
