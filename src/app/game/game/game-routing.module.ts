import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { ItemComponent } from './item/item.component';
import { GameComponent } from './game.component';


const routes: Routes = [
  {
    path: 'play',
    component: GameComponent,
    children: [
      {
        path: 'status',
        component: StatusComponent
      },
      {
        path: 'localisation',
        component: LocalisationComponent
      }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {
}
