import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppEvent } from '../interfaces/app-event';
import { MockAppEvents } from '../mock/app-events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private readonly eventsSubject: BehaviorSubject<AppEvent[]>;
  public readonly events$: Observable<AppEvent[]>;

  constructor() {
    this.eventsSubject = new BehaviorSubject([]);
    this.events$ = this.eventsSubject.asObservable();
  }

  /**
   * Loads events, TODO: currently from Mock.
   */
  public getEvents() {
    this.eventsSubject.next(MockAppEvents);
  }


}
