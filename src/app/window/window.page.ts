import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.page.html',
  styleUrls: ['./window.page.scss']
})
export class WindowPage implements OnInit {
  aufstehen = new Date().toDateString();
  
  constructor( ) {
    
  }
  dateChanged(date) {
    /** asta face sa ai expus in consola data si ora selectata, ceva tre
     * modificat, dar inca nu stiu ce aume
     */
    console.log(this.aufstehen);
  }

  ngOnInit() {
  }}
