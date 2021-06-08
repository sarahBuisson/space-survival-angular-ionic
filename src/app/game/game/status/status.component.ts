import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameplayService } from "../gameplay.service";
import { Subscription } from "rxjs";
import { Player } from "../../../../domain/model";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit, OnDestroy {

  subscriptions: Subscription;
  private player: Player;

  constructor(private storage: GameplayService) {
  }

  ngOnInit() {
    this.subscriptions = this.storage.player.subscribe((player) => {
      this.player = player;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
