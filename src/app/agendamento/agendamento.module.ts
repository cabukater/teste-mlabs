import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';
import { AgendamentoComponent } from './agendamento.component';
import { NgModule } from '@angular/core';
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
    ReactiveFormsModule,
    NgxEmojiPickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ]
})
export class AgendamentoModule { }
