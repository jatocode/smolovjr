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
  ];

  weightdata = {
  labels: ["Dag 1", "Dag 2", "Dag 3", "Dag 4"],
    datasets: [{
      label: 'Totalvikt',
      data: [2520, 2400, 2800, 2550],
      fill: false,
      lineTension: 0.1
      }
    ]
  };

  data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
          {
              label: "My First dataset",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [65, 59, 80, 81, 56, 55, 40],
              spanGaps: false,
          }
      ]
  };

  getTotal(week, day, factor) {
    return (this.weight * day.f + (week-1)*factor) * day.s * day.r;
  }
}
