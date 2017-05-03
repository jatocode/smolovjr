import { observable } from 'aurelia-framework';

export class Smolovjr {
  message = 'Smolov Jr';
  @observable weight = 100;
  easy = 2.5;
  hard = 5.0;
  weeks = ['1', '2', '3'];
  titles = ['Day', 'Set x Rep', 'Easy', 'Hard', 'Note'];
  days = [
    { s: 6, r: 6, f: 0.70,  wday: {value: 10} },
    { s: 7, r: 5, f: 0.75,  wday: {value: 11} },
    { s: 8, r: 4, f: 0.80,  wday: {value: 12} },
    { s: 10, r: 3, f: 0.85, wday: {value: 13} },
  ];

  weekdayoptions = [{ name: 'monday', value: 1 },
              { name: 'tuesday', value: 2 },
              { name: 'wednesday', value: 3 },
              { name: 'thursday', value: 4 },
              { name: 'friday', value: 5 },
              { name: 'saturday', value: 6 },
              { name: 'sunday', value: 7 },
              { name: 'Day 1', value: 10 },
              { name: 'Day 2', value: 11 },
              { name: 'Day 3', value: 12 },
              { name: 'Day 4', value: 13 },
              
  ];

  weightdata = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4"],
    datasets: []
  }

  attached() {
    this.loadConfig();
    this.createGraph();
  }

  createGraph() {
    for (let w of this.weeks) {
      var i = 1;
      var dataset = {
        label: 'Vecka' + w,
        data: [],
        fill: false,
        lineTension: 0.1
      }
      for (let d of this.days) {
        var total = (this.weight * d.f + ((parseInt(w) - 1) * this.easy)) * d.s * d.r;
        dataset.data.push(total);
      }
      this.weightdata.datasets.push(dataset);
    }
  }

  weightChanged(newValue, oldValue) {
    if (oldValue == undefined) {
      return;
    }
    this.weightdata.datasets = [];
    this.createGraph();
    this.saveConfig();
  }

  getTotal(week, day, factor) {
    return (this.weight * day.f + (week - 1) * factor) * day.s * day.r;
  }

  saveConfig() {
    let config = {
      weight: this.weight,
      days: this.days
    }
    localStorage.setItem('smolovjr', JSON.stringify(config));
  }

  loadConfig() {
    let config = JSON.parse(localStorage.getItem('smolovjr'));
    if(config != null && config.weight != null && config.days != null) {
      this.weight = config.weight;
      this.days = config.days;
    }
  }
}
