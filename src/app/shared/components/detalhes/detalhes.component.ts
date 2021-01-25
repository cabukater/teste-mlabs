import { SocialNetwork } from './../../../models/social.model';
import { Component, ComponentFactoryResolver, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  @Input() postDetail: any;
  @Input() showInstagram : boolean;
  @Input() showLinkedin : boolean;
  @Input() image: string;
  @Input() dataPost;
  @Input() modalClose;
  @Input() isModal;
  @ViewChild('modal', {static: false})  modal: ElementRef ;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit() {
    console.log(this.showInstagram)
    if(this.postDetail.text === null){
      console.log('veio vazio')
    }

    let index = this.postDetail.social_network_key.filter(social_network_key => {
      if(social_network_key === 2){
        this.showLinkedin = true
        console.log('foi 2')
       }
       if(social_network_key=== 3){
        this.showInstagram = true,
        console.log('foi 3')
      }
    });

  }
  close(){
    this.viewContainerRef
    .element
    .nativeElement
    .parentElement
    .removeChild(this.viewContainerRef.element.nativeElement);

  }
}
