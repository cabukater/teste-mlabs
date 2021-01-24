import { SocialNetwork } from './../models/social.model';
import { AgendamentoService } from './../services/agendamento-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {
  toggled: boolean = false;
  message: string;
  ifPost = false;
  socialNetworks :any= [];
  locale = 'pt-br';
  showPost: string;
  showInstagram: boolean = false;
  form : FormGroup;
  constructor(
    private localeService: BsLocaleService,
    private agendamento :AgendamentoService,
    private fb: FormBuilder
  ) { 
    localeService.use('pt-br');
  }

  ngOnInit() {
   
    this.getSocial();
    this.form = this.fb.group({
      data: [null],
      hora: [null],
      mensagem:[null],
      imagem:[null], 
      social: new FormArray([])
      });
      this.addCheckboxes();
}

private addCheckboxes() {
  console.log(this.socialNetworks)
  this.socialNetworks.forEach((o, i) => {
  const control = new FormControl(i === 0); // if first item set to true, else false
  (this.form.controls.social as FormArray).push(control);
  });
  }

  upImage(){
    this.ifPost = true
  }

  getSocial(){
   this.agendamento.getSocialNetworks().subscribe(
     data => {
      this.socialNetworks =  data
      this.socialNetworks.forEach((o, i) => {
        const control = new FormControl(i === 0); // if first item set to true, else false
        (this.form.controls.social as FormArray).push(control);
        });
     }
   )

  }

  save(){
    console.log(this.form.value)
  }

  handleSelection(){

  }

}
