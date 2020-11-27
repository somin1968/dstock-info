import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly targets: string[] = ['product', 'foodService', 'works', 'houseOf'];
  readonly mouseleaveTimer: number = 500;
  timeoutId: number;
  productIsVisible: boolean = false;
  productCategoriesIsVisible: boolean = false;
  foodServiceIsVisible: boolean = false;
  worksIsVisible: boolean = false;
  houseOfIsVisible: boolean = false;

  btnOnMouseover(target: string) {
    this.cancelTimeout();
    this.reset(null);
    this[`${target}IsVisible`] = true;
  }

  btnOnMouseleave(target: string) {
    this.timeoutId = window.setTimeout(() => {
      this[`${target}IsVisible`] = false;
      if (target === 'product') {
        this.productCategoriesIsVisible = false;
      }
    }, this.mouseleaveTimer);
  }

  cancelTimeout() {
    window.clearTimeout(this.timeoutId);
  }

  reset(ommitedTarget: string) {
    this.targets.forEach((target: string) => {
      if (target !== ommitedTarget) {
        this[`${target}IsVisible`] = false;
      }
    });
  }
}
