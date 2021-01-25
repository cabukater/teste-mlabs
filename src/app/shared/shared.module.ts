import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';

@NgModule({
  declarations: [
   HeaderComponent,
    ModalComponent,
    DetalhesComponent
  ],exports:[
    HeaderComponent,
    ModalComponent,
    DetalhesComponent
  ],imports: [
    CommonModule
  ], entryComponents: [
    ModalComponent,
    DetalhesComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
})
export class SharedModule { }
