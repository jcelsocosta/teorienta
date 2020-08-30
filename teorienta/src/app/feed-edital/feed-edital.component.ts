import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-edital',
  templateUrl: './feed-edital.component.html',
  styleUrls: ['./feed-edital.component.css']
})
export class FeedEditalComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor() { }

  ngOnInit(): void {
  }

}
