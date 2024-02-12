import { Component } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrl: './tva.component.scss'
})
export class TvaComponent {
    listeTaux=[5,10,20];
    
    ht=0;
    taux=20;//en %
    tva=0;
    ttc=0;

    listePays=['France','Allemagne','Espagne','Finlande','Italie'];

    onCalculerTvaTtc(){
      this.tva=this.taux/100 * this.ht;
      this.ttc = this.tva + this.ht;
    }

    onErrorExample(){
      let a =null;
      let b = <string> <unknown> a;
      console.log("b.length="+b.length);
    }
}
