import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { ListagemAgendamentoComponent } from './listagem-agendamento/listagem-agendamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgendamentoComponent,
    ListagemAgendamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
