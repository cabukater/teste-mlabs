import { DetalhesComponent } from './detalhes/detalhes.component';
import { AgendamentoService } from '../shared/services/agendamento-service.service';
import { Component,ComponentFactory, ComponentFactoryResolver, Input, OnInit, ViewContainerRef,  } from '@angular/core';
import {  Posts } from '../models/post.model';

@Component({
  selector: 'app-lista-agendamentos',
  templateUrl: './lista-agendamentos.component.html',
  styleUrls: ['./lista-agendamentos.component.scss']
})
export class ListaAgendamentosComponent implements OnInit {
  listSchedules: any = [];
  SocialNetwork: any = [];
  status: any = [];
  booleanValue: any = false;
  @Input() postData : Posts;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public viewContainerRef: ViewContainerRef,
    private agendamento: AgendamentoService
  ) {
   
   }

  ngOnInit() {
    this.getSchudules()
    this.getStatus()
    this.getSocialNetwork()
  }

  getSchudules() {
    this.agendamento.getSchedules().subscribe(
      data => {
        console.log(data)
        this.listSchedules = data
      }
    )

  }

  getStatus() {
    this.agendamento.getStatus().subscribe(
      status => {
        console.log(status)
        this.status = status
      }
    )
  }

  getSocialNetwork() {
    this.agendamento.getSocialNetworks().subscribe(
      status => {
        console.log(status)
        this.SocialNetwork = status
      }
    )
  }

  sort(coluna, boolean) {
    if (boolean == true) {
      this.listSchedules.sort((a, b) => a[coluna] < b[coluna] ? 1 : a[coluna] > b[coluna] ? -1 : 0)
      this.booleanValue = !this.booleanValue
    }
    else {
      this.listSchedules.sort((a, b) => a[coluna] > b[coluna] ? 1 : a[coluna] < b[coluna] ? -1 : 0)
      this.booleanValue = !this.booleanValue
    }
  }
  detailItem (event) {
    const elementContainerRef = this.viewContainerRef;
     const detail  = elementContainerRef.createComponent(
       this.componentFactoryResolver.resolveComponentFactory(DetalhesComponent) );
         detail.instance.postDetail = event;   
         console.log(event)
  }

}
