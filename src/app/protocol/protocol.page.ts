import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.page.html',
  styleUrls: ['./protocol.page.scss'],
})
export class ProtocolPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  today = Date.now();
}