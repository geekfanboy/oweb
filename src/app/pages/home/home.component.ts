import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ow-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contact = { name: '', email:'', subject: '', message: ''};

  constructor() { }

  ngOnInit() {
  }

}
