import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';
import { AgendamentoComponent } from './agendamento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgendamentoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxEmojiPickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ]
})
export class AgendamentoModule { }
