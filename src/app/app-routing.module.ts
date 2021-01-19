import { ListagemAgendamentoComponent } from './listagem-agendamento/listagem-agendamento.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '*', component:HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'lista', component: ListagemAgendamentoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
