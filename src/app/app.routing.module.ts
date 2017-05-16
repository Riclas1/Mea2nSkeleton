import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppLoginComponent } from './features/login/login.component';
import { AppMainComponent } from './features/main/main.component';
import { AppSetupComponent } from './features/setup/setup.component';
import { PageNotFoundComponent } from './app.page404.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login', },
  { path: 'login', component: AppLoginComponent },
  { path: 'main', component: AppMainComponent },
  { path: 'setup', component: AppSetupComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  AppLoginComponent,
  AppSetupComponent,
  AppMainComponent,
  PageNotFoundComponent
];