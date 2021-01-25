import { SharedModule } from './../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';
import { AgendamentoComponent } from './agendamento.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AgendamentoComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    SharedModule,
    ReactiveFormsModule,
    NgxEmojiPickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
})
export class AgendamentoModule { }
