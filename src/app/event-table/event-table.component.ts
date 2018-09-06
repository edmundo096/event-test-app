import { Component, OnInit, Input } from '@angular/core';
import { AppEvent } from '../interfaces/app-event';

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.css']
})
export class EventTableComponent implements OnInit {

  @Input() public events: AppEvent[];
  public displayedColumns: string[] = ['date', 'title', 'description'];

  constructor() { }

  ngOnInit() {
  }

}
