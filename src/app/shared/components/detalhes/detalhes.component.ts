import { SocialNetwork } from './../../../models/social.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  @Input() postDetail: any;
  @Input() showInstagram : boolean;
  @Input() showLinkedin : boolean;
  @Input() image: boolean;
  @Input() dataPost;
  constructor() { }

  ngOnInit() {
    
    if(this.postDetail.text === null || this.postDetail.text === ''){
      console.log('veio vazio')
    }
    console.log(this.postDetail.social_network_key)
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

}
