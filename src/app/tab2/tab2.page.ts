import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor() {}
  a:number = 0;
  b:number = 0;
  d:number = 0;

  ras(a:any, b:any) {
    try {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.d = 1;
      if ((isNaN(this.a) == true) || (isNaN(this.b) == true)) {
        throw new Error("Not a number was entered")
      }
      for (let i = this.a; i<=this.b; i++) {
        if ((i % 7 == 0) || (i < 30)) {
          this.d *= i;
        }
      }
      if (this.d === 1) {
        this.d = 0;
      }
    }
    catch (error) {
      console.log(error);
    }

  }
}
