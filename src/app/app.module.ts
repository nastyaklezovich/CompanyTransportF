import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS, /* other http imports */ } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { CalculateComponent } from './user/calculate/calculate.component';
import { FindRootComponent } from './user/calculate/find-root/find-root.component';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { AdminComponent } from './admin/admin.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { ViewCompaniesComponent } from './admin/view-companies/view-companies.component';
import { EditCompanyComponent } from './admin/view-companies/edit-company/edit-company.component';
import { AddTransportComponent } from './admin/add-transport/add-transport.component';
import { ViewTransportsComponent } from './admin/view-transports/view-transports.component';
import { AddMapComponent } from './admin/add-map/add-map.component';
import { ViewMapsComponent } from './admin/view-maps/view-maps.component';

import { AuthInterceptor } from './core/middleware';
import { AddIntermediatePointComponent } from './admin/view-maps/add-intermediate-point/add-intermediate-point.component';

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    AuthComponent,
    UserComponent,
    CalculateComponent,
    FindRootComponent,
    UserOrderComponent,
    AdminComponent,
    AddCompanyComponent,
    ViewCompaniesComponent,
    EditCompanyComponent,
    AddTransportComponent,
    ViewTransportsComponent,
    AddMapComponent,
    ViewMapsComponent,
    AddIntermediatePointComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
