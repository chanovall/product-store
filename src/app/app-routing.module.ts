import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/components/admin/admin.component';
import { LoginComponent } from './login/components/login/login.component';
import { MainComponent } from './main/components/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component:LoginComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
