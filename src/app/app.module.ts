import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { ListagemAgendamentoComponent } from './listagem-agendamento/listagem-agendamento.component';
import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgendamentoComponent,
    ListagemAgendamentoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
          NgxEmojiPickerModule.forRoot()

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
