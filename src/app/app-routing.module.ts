import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyPageComponent } from './pages/typography-page/typography-page.component';
import { AppComponent } from './app.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/typography',
    pathMatch: 'full'
  },
  {
    path: 'typography',
    component: TypographyPageComponent
  },
  {
    path: 'buttons',
    component: ButtonsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
