import { observable } from 'aurelia-framework';

export class App {
  message = 'Smolov Jr';
  @observable weight = 100;
  easy = 2.5;
  hard = 5.0;
  weeks = ['1', '2', '3'];
  titles = ['Dag', 'SetxRep', 'Lätt', 'Tung', 'Anteckning'];
  days = [
    { s: 6, r: 6, f: 0.70,  wday: {value: 1} },
    { s: 7, r: 5, f: 0.75,  wday: {value: 2} },
    { s: 8, r: 4, f: 0.80,  wday: {value: 4} },
    { s: 10, r: 3, f: 0.85, wday: {value: 6} },
  ];

  weekdayoptions = [{ name: 'måndag', value: 1 },
              { name: 'tisdag', value: 2 },
              { name: 'onsdag', value: 3 },
              { name: 'torsdag', value: 4 },
              { name: 'fredag', value: 5 },
              { name: 'lördag', value: 6 },
              { name: 'söndag', value: 7 },
  ];

  weightdata = {
    labels: ["Dag 1", "Dag 2", "Dag 3", "Dag 4"],
    datasets: []
  }

  activate() {
    this.loadConfig();
  }

  bind() {
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
