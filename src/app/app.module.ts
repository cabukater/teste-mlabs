import { ServicesModule } from './services/services.module';
import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaAgendamentosComponent } from './lista/lista-agendamentos.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { ModalModule } from 'ngx-bootstrap/modal';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaAgendamentosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    ComponentsModule,
    AgendamentoModule,
    ModalModule.forRoot(),

  ],
  providers:[
    { provide: LOCALE_ID, useValue: "pt-BR" }

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
