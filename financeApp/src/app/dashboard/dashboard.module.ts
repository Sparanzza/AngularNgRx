import { DetailComponent } from "./../deposit/detail/detail.component";
import { DepositComponent } from "./../deposit/deposit.component";
import { StadisticComponent } from "./../deposit/stadistic/stadistic.component";
import { Routes } from "@angular/router";

export const dashboardRoutes: Routes = [
  { path: "", component: StadisticComponent },
  { path: "deposit", component: DepositComponent },
  { path: "detail", component: DetailComponent },
  { path: "**", redirectTo: "" }
];

