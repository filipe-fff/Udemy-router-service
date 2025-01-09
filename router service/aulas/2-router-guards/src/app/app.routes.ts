import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { GeneralComponent } from './components/general/general.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreditComponent } from './components/credit/credit.component';
import { DebitComponent } from './components/debit/debit.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "/login" },
    { path: "login", title: "Login", component: LoginComponent },
    { 
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [authGuard()],
        children: [
            { path: "", pathMatch: "full", redirectTo: "general" },
            { path: "general", title: "Geral", component: GeneralComponent },
            {
                path: "payments",
                component: PaymentsComponent,
                title: "Pagamentos",
                children: [
                    { path: "credit", title: "Crédito", component: CreditComponent },
                    { path: "debit", title: "Debito", component: DebitComponent }
                ]
            },
            { path: "admin", title: "Administrador", component: AdminComponent }
        ]
    },
    { path: "not-authorized", title: "Not Authorized", component: NotAuthorizedComponent, data: { type: "not-authorized" } },
    { path: "not-found", title: "Not Found", component: NotAuthorizedComponent, data: { type: "not-found" } }
];