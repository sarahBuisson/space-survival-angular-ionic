import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Party, Player } from '../../../domain/model';
import { buildParty } from '../../../domain/builder';

@Injectable({
  providedIn: 'root'
})
export class GameplayService implements OnDestroy {
  party: Subject<Party> = new BehaviorSubject<Party>(undefined);
  player: Subject<Player> = new BehaviorSubject<Player>(undefined);

  constructor() {
    this.newParty();
  }

  newParty() {
    const party = buildParty();
    this.party.next(party);
    this.player.next(party.player);
  }

  ngOnDestroy(): void {
    this.party.unsubscribe();
    this.player.unsubscribe();
  }
}
