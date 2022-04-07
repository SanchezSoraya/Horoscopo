import { Component, Input, OnInit } from '@angular/core';
import { InfoMonth } from 'src/app/interfaces/InfoMonth.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() infoMonth:InfoMonth = { month:"", description:"", urlImage:""}
  constructor() { }

  ngOnInit(): void {
  }

}
