export class App {
  message = 'Smolov Jr';
  weight = 100;
  easy = 2.5;
  hard = 5.0;
  weeks = [ '1', '2', '3'];
  titles = ['Dag','Lätt','Tung','Klar'];
  days = [
    {s:6, r:6, f:0.70},
    {s:8, r:4, f:0.75},
    {s:7, r:5, f:0.80},
    {s:10, r:3, f:0.85},
  ]

  getTotal(week, day, factor) {
    return (this.weight * day.f + (week-1)*factor) * day.s * day.r;
  }
}
