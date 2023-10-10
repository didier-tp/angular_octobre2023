Ajout d'onglets (un des composants prédéfinis de l'extension "@angular/material")

1) ng add @angular/material

2) on ajoute dans  app.module.ts
import {MatTabsModule} from '@angular/material/tabs';

imports:[ ... , MatTabsModule]

3) on ajoute dans basic.component.html
<mat-tab-group>
   <mat-tab label="calculatrice">
       <app-calculatrice></app-calculatrice>
   </mat-tab>
   <mat-tab label="tva">
      <app-tva></app-tva>
   </mat-tab>
</mat-tab-group>