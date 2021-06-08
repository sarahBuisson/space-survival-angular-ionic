import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartScreenComponent } from './menu/start-screen/start-screen.component';
import { GameComponent } from './game/game/game.component';
import { GameRoutingModule } from "./game/game/game-routing.module";

const routes: Routes = [
  {
    path: '',
    component: StartScreenComponent
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
