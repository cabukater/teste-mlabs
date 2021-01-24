import { ModalComponent } from './../components/modal/modal.component';
import { SocialNetwork } from './../models/social.model';
import { AgendamentoService } from './../services/agendamento-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { DomSanitizer } from '@angular/platform-browser';
defineLocale('pt-br', ptBrLocale);
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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
  imageModal: string;
  textModal: string

  imageSrc: string
  statusCheckbox: boolean;
  bsModalRef: BsModalRef;

  constructor(
    private sanitizer: DomSanitizer,
    private localeService: BsLocaleService,
    private agendamento :AgendamentoService,
    private fb: FormBuilder,
    private modalService: BsModalService
  ) { 
    localeService.use('pt-br');
    this.imageSrc = 'assets/img/img1.svg';
  }

  ngOnInit() {
   this.getSocial();
    this.form = this.fb.group({
      data: [null],
      hora: [null],
      mensagem:[null],
      img:[null], 
      social: new FormArray([])
      });
     
}

  getSocial(){
   this.agendamento.getSocialNetworks().subscribe(
     data => {
      this.socialNetworks =  data
      this.socialNetworks.forEach((o, i) => {
         const control = new FormControl(false);
        (this.form.controls.social as FormArray).push(control);
        });

     }
   )

  }

/*
   getSocial(){
   this.agendamento.getSocialNetworks().subscribe(
     data => {
      this.socialNetworks =  data
      this.socialNetworks.forEach((o, i) => {
        if(o.status === 'enabled'){
          this.statusCheckbox = false  
        } else{
          this.statusCheckbox = true  

        }   
        const control = new FormControl({ value:false,  disabled: this.statusCheckbox});
        (this.form.controls.social as FormArray).push(control);
        });
     }
   )}*/

  handleSelection(event){
    if(this.form.get('mensagem').value === null){
      this.form.get('mensagem').setValue(  
         event.char + '  '
       )
    }else{
   this.form.get('mensagem').setValue(  
      this.form.get('mensagem').value +' '+ event.char + ' '
     )
   }
  }

  onFileChange(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.form.patchValue({
          img: reader.result
        });
   
      };
   
    }
  }

  save(){
    this.bsModalRef = this.modalService.show(ModalComponent, 
      {
        class: 'modal-dialog-centered' 
      })
    console.log(this.form.value)

  }
   
}
