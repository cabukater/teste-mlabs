import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';

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
export class SharedModule { }
