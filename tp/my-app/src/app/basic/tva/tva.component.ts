import { Component } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.scss']
})
export class TvaComponent {
  tabTaux :number[] = [ 5 , 10 , 20 ];

  date = new Date();
  
  ht /*:number*/ = 0;
  tauxTva /*:number*/ = 20; //en %
  tva /*:number*/ =0;
  ttc /*:number*/ =0;

  onCalculTvaTtc(){
    this.tva = this.ht * this.tauxTva / 100;
    this.ttc = this.ht + this.tva ;
  }

}
