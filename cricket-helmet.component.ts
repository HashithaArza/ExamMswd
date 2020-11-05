import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cricket-helmet',
  templateUrl: './cricket-helmet.component.html',
  styleUrls: ['./cricket-helmet.component.css']
})
export class CricketHelmetComponent implements OnInit {
  wonderProps = {name:"cricket-helmet"};
  constructor() { }

  ngOnInit(): void {
  }

}
