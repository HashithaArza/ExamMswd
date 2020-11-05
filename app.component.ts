import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MARK SPORTS SHOP';
  ITEMS=[
    {name:"batmenton-racket",link:"/batmenton-racket"},
    {name:"cricket-bat",link:"/cricket-bat"},
    {name:"cricket-helmet",link:"/cricket-helmet"},
    {name:"football",link:"/football"},
    {name:"hockey-stick",link:"/hockey-stick"}
  ]
}
