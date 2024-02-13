import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';

  constructor(){
    setTimeout(()=>{ this.title = this.title + "*" } , 3000); //changement dans3000ms 
  }
}
