import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ModalComponent
  ],exports:[
    HeaderComponent,
    ModalComponent,
    FooterComponent
  ],imports: [
    CommonModule
  ], entryComponents: [
    ModalComponent
  ]
  
})
export class ComponentsModule { }
