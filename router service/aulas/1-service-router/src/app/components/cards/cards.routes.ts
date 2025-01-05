import { Routes } from "@angular/router";
import { CreditComponent } from "./components/credit/credit.component";
import { DebitComponent } from "./components/debit/debit.component";
import { CardComponent } from "./components/card/card.component";

export const CardsRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./cards.component").then(m => m.CardsComponent),
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "credit"
            },
            {
                path: "credit",
                title: "Crédito",
                component: CreditComponent
            },
            {
                path: "debit",
                title: "Débito",
                component: DebitComponent
            },
            {
                path: ":cardId",
                title: "Cartão",
                component: CardComponent
            }
        ]
    }
]