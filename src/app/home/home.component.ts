import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Observable } from 'rxjs';
import { AppEvent } from '../interfaces/app-event';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public events$: Observable<AppEvent[]>;

  constructor(
    private _eventsService: EventsService
  ) {
    this.events$ = this._eventsService.events$;

    // Initial load handling.
    this._eventsService.events$.pipe(first()).subscribe((firstEvents) => {
      if (firstEvents.length === 0) {
        this.loadEvents();
      }
    });
  }

  ngOnInit() {
  }

  /**
   * Loads / refreshes events.
   */
  public loadEvents(): void {
    this._eventsService.getEvents();
  }

}
