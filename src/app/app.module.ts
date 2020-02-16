import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgPrimeModule } from 'src/common/modules/ng-prime.module';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './404/404.component';
import { AboutComponent } from './about/about.component';
import { WeddingComponent } from './wedding/wedding.component';
import { ReceptionComponent } from './reception/reception.component';
import { RegistryComponent } from './registry/registry.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    AboutComponent,
    WeddingComponent,
    ReceptionComponent,
    RegistryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule { }
