import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SidebarModule} from 'ng-sidebar';
import { EventEmitterService } from './Services/event-emitter.service';
import { LoginGuard } from './Guards/login.guard';
import { MainServiceService } from './Services/main-service.service';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { InfoComponent } from './components/info/info.component';
import { RecoverComponent } from './components/recover/recover.component';
import { RegisterComponent } from './components/register/register.component';
import { PaymentinfoComponent } from './components/paymentinfo/paymentinfo.component';
import { MyuserComponent } from './components/myuser/myuser.component';
import { HistoryComponent } from './components/history/history.component';
import { ServiceHistoryCardComponent } from './components/service-history-card/service-history-card.component';
import { WorkerComponent } from './components/worker/worker.component';
import { AskSupportComponent } from './components/ask-support/ask-support.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { DecisionServiceComponent } from './components/decision-service/decision-service.component';
import { WorkerRegisterComponent } from './components/worker-register/worker-register.component';
import { ServiceOptionsComponent } from './components/service-options/service-options.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CompanyRegisterComponent } from './components/company-register/company-register.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';




const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent}, // , canActivate: [LoginGuard]},
  {path: 'info', component: InfoComponent},
  {path: 'recover', component: RecoverComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'paymentinfo', component: PaymentinfoComponent }, // , canActivate: [LoginGuard]},
  {path: 'workerregister', component: WorkerRegisterComponent}, // , canActivate: [LoginGuard]},
  {path: 'myuser', component: MyuserComponent}, // , canActivate: [LoginGuard]},
  {path: 'history', component: HistoryComponent}, // , canActivate: [LoginGuard]},
  {path: 'worker', component: WorkerComponent}, // , canActivate: [LoginGuard]},
  {path: 'servicehistorycard', component: ServiceHistoryCardComponent}, // , canActivate: [LoginGuard]},
  {path: 'asksupport', component: AskSupportComponent}, // , canActivate: [LoginGuard]},
  {path: 'categories', component: CategoriesComponent}, // , canActivate: [LoginGuard]},
  {path: 'notifications', component: NotificationsComponent}, // , canActivate: [LoginGuard]},
  {path: 'decisionservice', component: DecisionServiceComponent}, // , canActivate: [LoginGuard]},
  {path: 'serviceoptions', component: ServiceOptionsComponent}, // , canActivate: [LoginGuard]},
  {path: 'sidebar', component: SidebarComponent}, // , canActivate: [LoginGuard]},
  {path: 'companyregister', component: CompanyRegisterComponent}// , canActivate: [LoginGuard]}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InfoComponent,
    RecoverComponent,
    RegisterComponent,
    PaymentinfoComponent,
    MyuserComponent,
    HistoryComponent,
    ServiceHistoryCardComponent,
    WorkerComponent,
    AskSupportComponent,
    CategoriesComponent,
    NotificationsComponent,
    DecisionServiceComponent,
    WorkerRegisterComponent,
    ServiceOptionsComponent,
    SidebarComponent,
    CompanyRegisterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSelectModule,
        ToastrModule.forRoot(),
        RouterModule.forRoot(routes),
        Ng2SearchPipeModule,
        SidebarModule.forRoot(),
        HttpClientModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
  providers: [ LoginGuard, EventEmitterService, MainServiceService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
