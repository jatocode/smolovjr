import { observable } from 'aurelia-framework';

export class Texas {
  message = 'Texas Method';
  @observable sweight = 100;
  @observable bweight = 100;
  @observable dweight = 100;
  
  weeks = ['1'];
  titles = ['Dag', 'Set x Rep', 'Övning', 'Anteckning'];
  days = [
    { excs: [
      {s: 5, r: 5, f: 0.90, ex: 'Squat'},
      {s: 5, r: 5, f: 0.90, ex: 'Bench/OH'},
      {s: 5, r: 5, f: 0.90, ex: 'Deadlift'}
      ], wday: {value: 1} 
    },
    { excs: [
      {s: 5, r: 5, f: 0.90, ex: 'Squat'},
      {s: 5, r: 5, f: 0.90, ex: 'Bench/OH'},
      {s: 1, r: 3, f: 0.00, ex: 'Chin up'},
      {s: 5, r: 5, f: 0.90, ex: 'Back extension'}
      ], wday: {value: 3} 
    },
    { excs: [
      {s: 5, r: 5, f: 0.90, ex: 'Squat'},
      {s: 5, r: 5, f: 0.90, ex: 'Bench/OH'},
      {s: 5, r: 5, f: 0.90, ex: 'Deadlift'}
      ], wday: {value: 5} 
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

  attached() {
    this.loadConfig();
  }


  sweightChanged(newValue, oldValue) {
    if (oldValue == undefined) {
      return;
    }
    this.saveConfig();
  }
  
  bweightChanged(newValue, oldValue) {
    if (oldValue == undefined) {
      return;
    }
    this.saveConfig();
  }

  dweightChanged(newValue, oldValue) {
    if (oldValue == undefined) {
      return;
    }
    this.saveConfig();
  }

  getTotal(week, day, factor) {
    return (this.sweight * day.f + (week - 1) * factor) * day.s * day.r;
  }

  saveConfig() {
    let config = {
      sweight: this.sweight,
      bweight: this.bweight,
      dweight: this.dweight,
      days: this.days
    }
    localStorage.setItem('texas', JSON.stringify(config));
  }

  loadConfig() {
    let config = JSON.parse(localStorage.getItem('texas'));
    if(config != null && config.days != null) {
      this.sweight = config.sweight;
      this.bweight = config.bweight;
      this.dweight = config.dweight;
      this.days = config.days;
    }
  }
}
