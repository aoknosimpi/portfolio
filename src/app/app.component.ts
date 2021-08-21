import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  options: AnimationOptions = {
    path: '/assets/data.json',
    loop: false,
    autoplay: false
  };

  animationCreated(animationItem: AnimationItem): void {
    animationItem.setSpeed(0.7);
    setTimeout(() => {
        animationItem.play();
    }, 2000);
    console.log(animationItem);
  }
}
