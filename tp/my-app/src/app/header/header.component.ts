import { Component, Input, OnInit } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  @Input()
  titre = "titreParDefaut";

  constructor(public preferencesService : PreferencesService){
    //injection de dépendance par constructeur (de @Component)
    console.log("dans constructor, titre="+this.titre);
  }

  ngOnInit(): void {
    console.log("dans ngOnInit(), titre="+this.titre);
  }

}
