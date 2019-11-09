import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { CalculateComponent } from './user/calculate/calculate.component';
import { FindRootComponent } from './user/calculate/find-root/find-root.component';
import { UserOrderComponent } from './user/user-order/user-order.component';


const routes: Routes = [
  {
    path: "auth",
    component: AuthComponent,
  },
  {
    path:"user",
    component: UserComponent,
    children: [
      {
        path:"calculate",
        component: CalculateComponent,
        children: [
          {
            path:"findroot",
            component: FindRootComponent
          }
        ]
      },
      {
        path:'orders',
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
