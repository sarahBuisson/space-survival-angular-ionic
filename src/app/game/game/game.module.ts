import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { ItemComponent } from './item/item.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { StatusComponent } from './status/status.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [GameComponent,
    ItemComponent, LocalisationComponent,
    StatusComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    IonicModule
  ]
})
export class GameModule {
}
