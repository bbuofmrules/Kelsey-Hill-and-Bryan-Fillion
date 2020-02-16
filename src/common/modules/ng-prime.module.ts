import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  imports: [
    ButtonModule,
    SelectButtonModule,
    TabMenuModule
  ],
  exports: [
    ButtonModule,
    SelectButtonModule,
    TabMenuModule
  ]
})
export class NgPrimeModule { }