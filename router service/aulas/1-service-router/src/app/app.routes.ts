import { Routes } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { InformationsComponent } from './components/informations/informations.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "initial"
    },
    {
        path: "initial",
        title: "Início",
        component: InitialComponent
    },
    {
        path: "contacts",
        title: "Contatos",
        component: ContactsComponent
    },
    {
        path: "informations",
        title: "Informações",
        component: InformationsComponent
    },
    {
        path: "cards",
        title: "Cartões",
        loadChildren: () => import("./components/cards/cards.routes").then(m => m.CardsRoutes)
    }
];