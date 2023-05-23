import { Component } from '@angular/core';
import { IonThumbnail } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  a: number[][] = [];
  n:number = 0;
  d:number = 0;
  constructor() {}

  ras(n:any) {
    this.a = [];
    this.d = 0;
    try {
      this.n = parseInt(n);
      if (isNaN(this.n) == true) {
        throw new Error("Not a number was entered")
      }
      if (this.n <= 0) {
        throw new Error("Impossible with negative number")
      }
      let i:number = 0, j:number = 0;
      this.a = Array(this.n)
      for (i = 0; i<this.n; i++) {
        this.a[i] = Array(this.n);
        for (j= 0; j<this.n; j++){
          let aa: number = Math.random() * 20 + 10
          this.a[i][j] = parseInt(aa.toFixed(1));
          if (i === j){
            this.d += this.a[i][j];
          }
        }
      }
    }
    catch (error) {
      console.log(error);
    }

  }

  getColor(i:number, j:number) {
    return (i===j) ? 'gold' : 'green';
  }

  ngOnInit(){

  }
}
