import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
})
export class TopPage implements OnInit {

  authors: any;

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.libraryService.getTop().then( res => {
      this.authors = res;
    })
  }

}
