import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ButtonComponent} from './pages/button/button.component';

const routes: Routes = [
  //{path: '', pathMatch: 'full', redirectTo: '/welcome'},
  {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)},
  {path: 'button', loadChildren: () => import('./pages/button/button.module').then(m => m.ButtonModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
