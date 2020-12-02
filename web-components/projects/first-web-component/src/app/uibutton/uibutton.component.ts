import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uibutton',
  templateUrl: './uibutton.component.html',
  styleUrls: ['./uibutton.component.css']
})
export class UIButtonComponent implements OnInit {

  constructor() { }
  hoi () {
    console.log('hoi')
  }

  ngOnInit(): void {
  }

}
