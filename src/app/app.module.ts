import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatSelectModule, MatIconModule, MatButtonModule, MatToolbarModule} from '@angular/material';
import { TypographyPageComponent } from './pages/typography-page/typography-page.component';
import { UiButtonComponent } from './ui/ui-button/ui-button.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { UiDefaultTypographyComponent } from './ui/ui-default-typography/ui-default-typography.component';
import { UiCustomTypographyComponent } from './ui/ui-custom-typography/ui-custom-typography.component';


@NgModule({
  declarations: [
    AppComponent,
    TypographyPageComponent,
    UiButtonComponent,
    ButtonsPageComponent,
    UiDefaultTypographyComponent,
    UiCustomTypographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
