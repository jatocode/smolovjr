import { bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Texas {
  message = 'Texas Method';
  @bindable sweight;
  @bindable bweight;
  @bindable dweight;

  public ea: EventAggregator;
  public subscriber;

  weeks = ['1'];
  titles = ['Dag', 'Set x Rep', 'Övning', 'Anteckning'];
  days = [
    {
      excs: [
        { s: 5, r: 5, f: 0.90, ex: 'Squat' },
        { s: 5, r: 5, f: 0.90, ex: 'Bench/OH' },
        { s: 5, r: 5, f: 0.90, ex: 'Deadlift' }
      ], wday: { value: 1 }
    },
    {
      excs: [
        { s: 5, r: 5, f: 0.90, ex: 'Squat' },
        { s: 5, r: 5, f: 0.90, ex: 'Bench/OH' },
        { s: 1, r: 3, f: 0.00, ex: 'Chin up' },
        { s: 5, r: 5, f: 0.90, ex: 'Back extension' }
      ], wday: { value: 3 }
    },
    {
      excs: [
        { s: 5, r: 5, f: 0.90, ex: 'Squat' },
        { s: 5, r: 5, f: 0.90, ex: 'Bench/OH' },
        { s: 5, r: 5, f: 0.90, ex: 'Deadlift' }
      ], wday: { value: 5 }
    },
  ];

  weekdayoptions = [{ name: 'måndag', value: 1 },
    { name: 'tisdag', value: 2 },
    { name: 'onsdag', value: 3 },
    { name: 'torsdag', value: 4 },
    { name: 'fredag', value: 5 },
    { name: 'lördag', value: 6 },
    { name: 'söndag', value: 7 },
    { name: 'Dag 1', value: 10 },
    { name: 'Dag 2', value: 11 },
    { name: 'Dag 3', value: 12 },
    { name: 'Dag 4', value: 13 },
  ];

  constructor(EventAggregator) {
    this.ea = EventAggregator;
    this.subscriber = this.ea.subscribe('weights', response => {
      this.sweight = response.sweight;
      this.bweight = response.bweight;
      this.dweight = response.dweight;
    });
  }

  attached() {
    this.loadConfig();
  }

  detached() {
    this.subscriber.dispose();
  }

  getTotal(week, day, factor) {
    return (this.sweight * day.f + (week - 1) * factor) * day.s * day.r;
  }

  saveConfig() {
    let config = {
      days: this.days
    }
    localStorage.setItem('texas', JSON.stringify(config));
  }

  loadConfig() {
    let config = JSON.parse(localStorage.getItem('texas'));
    if (config != null && config.days != null) {
      this.days = config.days;
    }
  }
}
