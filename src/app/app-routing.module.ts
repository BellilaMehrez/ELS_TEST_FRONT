import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SalariedComponent} from "./salaried/salaried.component";

const routes: Routes = [
  { path: '',  redirectTo: '/salaried', pathMatch: 'full' },
  { path: 'salaried', component: SalariedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
