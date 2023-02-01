import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides = [
    {
      title: "Espiritualidad.",
      desc: null,
      subtitle: "Oracion",
      img: "https://us.123rf.com/450wm/jemastock/jemastock1904/jemastock190432680/jemastock190432680.jpg?ver=6",
      description: "Es el sentido del alma."
    },
    {
      title: "Romance",
      desc: null,
      subtitle: "Pasiones",
      img: "data:image/jpeg;base64,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",
      description: "expresion del corazon."
    },
    {
      title: "Crimen",
      desc: null,
      subtitle: "Miedo",
      img: "assets/3.jpg",
      description: "la cruel realidad de la vida."
    },
    {
      title: "Fantasia",
      desc: null,
      subtitle: "Miedo",
      img: "assets/3.jpg",
      description: "la cruel realidad de la vida."
    }
  ]

  constructor(private router: Router, private storage: Storage) { 
  }

  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/menu/home");
  }
  ngOnInit() {
  }

}
