import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-books-modal',
  templateUrl: './books-modal.page.html',
  styleUrls: ['./books-modal.page.scss'],
})
export class BooksModalPage implements OnInit {

  author: any;

  constructor( 
    private navParams: NavParams,
    private modalController: ModalController
    ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.author = this.navParams.get("author");
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
