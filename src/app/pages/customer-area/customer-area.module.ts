import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ExpensesComponent } from "./expenses/expenses.component";

const routes = [
    { path: 'expenses', component: ExpensesComponent},
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerAreaModule {}