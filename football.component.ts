import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {
  wonderProps = {name:"football"};
  constructor() { }

  ngOnInit(): void {
  }

}
