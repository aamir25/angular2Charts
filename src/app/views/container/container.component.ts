import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() title: string;
  lineOptions: Object;
  doughnutOptions: Object;

  constructor() {
    this.lineOptions = {
      series: [{
        color: "#000000",
        showInLegend: false,
        data: [0, 1, 0, 0, 0, 0, 0],
      }],
      plotOptions: {
        line: {
          marker: {
            enabled: false
          }
        }
      },
      chart: {
        height: 100,
        width: 200,
        backgroundColor: "#93c572"
      },
      title: {
        text: null
      },
      xAxis: {
        visible: false,
        title: {
          text: null
        },
        labels: {
          enabled: false
        }
      },
      yAxis: {
        visible: false,
        title: {
          text: null
        },
        labels: {
          enabled: false
        }
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      gridLineColor: 'transparent'
    };

    this.doughnutOptions = {
      series: [{
        innerSize: '70%',
        showInLegend: false,
        data: [
          { y: 90, color: '#93c572' },
          { y: 10, color: '#ffffff' }
        ]
      }],
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          startAngle: 180
        }
      },
      chart: {
        type: "pie",
        height: 150,
        width: 150,
      },
      title: {
        text: '90%',
        verticalAlign: 'middle',
        y: 5
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      gridLineColor: 'transparent',
      tooltip: {
        enabled: false
      }
    }
  }

  ngOnInit() {
  }

}