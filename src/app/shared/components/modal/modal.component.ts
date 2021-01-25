import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    private bsModalRef: BsModalRef,
    private router: Router) { }

  ngOnInit() {
  }

  goToList(){
    this.router.navigate(['lista']);
    this.bsModalRef.hide()
  }

}
