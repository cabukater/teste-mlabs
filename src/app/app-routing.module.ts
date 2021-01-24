import { ListaAgendamentosComponent } from './lista/lista-agendamentos.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '*', component:HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'lista', component: ListaAgendamentosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
