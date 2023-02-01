import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-author-detail-modal',
  templateUrl: './author-detail-modal.page.html',
  styleUrls: ['./author-detail-modal.page.scss'],
})
export class AuthorDetailModalPage implements OnInit {

  author: any;

  constructor(private navParams: NavParams,
    private modalController: ModalController) { }

  async ngOnInit() {
    this.author = this.navParams.get("author");
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
