import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hockey-stick',
  templateUrl: './hockey-stick.component.html',
  styleUrls: ['./hockey-stick.component.css']
})
export class HockeyStickComponent implements OnInit {
  wonderProps = {name:"hockey-stick"};
  constructor() { }

  ngOnInit(): void {
  }

}
