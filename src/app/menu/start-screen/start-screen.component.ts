import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { GameplayService } from "../../game/game/gameplay.service";

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent implements OnInit {

  constructor(private router:Router, private gameplay:GameplayService) { }

  ngOnInit() {}

  start() {
    this.router.navigateByUrl('/play');
  }
}
