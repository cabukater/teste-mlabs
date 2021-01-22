import { AgendamentoService } from './../services/agendamento-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {
  toggled: boolean = false;
  message: string;
  ifPost = false;
  socialNetworks : any;

  constructor(
    private agendamento :AgendamentoService 
  ) { }

  ngOnInit() {
    this.getSocial()
  }
  
handleSelection(event) {
  console.log(event.char);
}

  upImage(){
    this.ifPost = true
  }

  getSocial(){
     this.agendamento.getSocialNetworks().subscribe(
       data => {
       this.socialNetworks = data
     })
  }
}
