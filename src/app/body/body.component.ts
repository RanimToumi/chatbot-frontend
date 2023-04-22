import { Component, OnInit } from '@angular/core';
import { AnimationBuilder ,style,animate} from '@angular/animations';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
    const myHeadingSpinning = [
      { transform: "rotate(0) scale(1)" },
      { transform: "rotate(360deg) scale(0)" },
    ];
    const myHeadingTiming = {
      duration: 2000,
      iterations: 1,
    };
    const myHeading = document.querySelector(".right-image")
    const myHeading1 = document.querySelector(".main-button-gradient")
    if (myHeading) {

      myHeading.addEventListener("click", () => {
        myHeading.animate(myHeadingSpinning, myHeadingTiming);
      });
    }
    if (myHeading1) {

      myHeading1.addEventListener("click", () => {
        myHeading1.animate(myHeadingSpinning, myHeadingTiming);
      });
    }
  }
  }


