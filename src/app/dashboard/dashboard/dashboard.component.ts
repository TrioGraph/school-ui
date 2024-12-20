import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
	pieChartCanvas: any;
  	ctx: any;
  	lineChartCanvas : any;
  
  	 ngAfterViewInit() {

    	this.pieChartCanvas = document.getElementById('pieChart');
    	this.ctx = this.pieChartCanvas.getContext('2d');
    	// let myChart = new Chart(this.ctx, {
       	// 	type: 'doughnut',
        // 	data: {
        //     	labels: [
        //         	"Student",
        //         	"Teaching Staff",
        //         	"Nonteaching staff"
        //     	],
        //     	datasets: [
        //         {
        //             data: [300, 50, 100],
        //             borderWidth: [1, 1, 1],
        //             backgroundColor: [
        //             	"#008ECC",
        //                 "rgba(75,192,192,1)",
        //                 "#FFCE56"
        //             ],
        //             hoverBackgroundColor: [
        //             	"#008ECC",
        //               	"rgba(75,192,192,1)",
        //                 "#FFCE56"
        //             ]
        //         }]
        // 	}
    	// });//pieChart

    	this.lineChartCanvas = document.getElementById('lineCahrt');
    	this.ctx = this.lineChartCanvas.getContext('2d');
    	// var myLineChart = new Chart(this.ctx, {
        // 	type: 'line',
        // 	options: {
        //     	// legend: {
        //         	// display: false
        //     	// }
        // 	},
        // 	data: {
        //     	labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
        //     	datasets: [
        //         	{
        //             	label: "My First dataset",
        //             	fill: true,
        //             	backgroundColor: "rgba(77, 193, 75, 0.4)",
        //             	borderColor: "rgba(75,192,192,1)",
        //             	borderCapStyle: 'butt',
        //             	borderDash: [],
        //             	borderDashOffset: 0.0,
        //             	borderJoinStyle: 'miter',
        //             	borderWidth: 1,
        //             	pointBorderColor: "rgba(75,192,192,1)",
        //             	pointBackgroundColor: "#fff",
        //             	pointBorderWidth: 1,
        //             	pointHoverRadius: 5,
        //             	pointHoverBackgroundColor: "blue",
        //             	pointHoverBorderColor: "rgba(220,220,220,1)",
        //             	pointHoverBorderWidth: 2,
        //             	pointRadius: 1,
        //             	pointHitRadius: 0,
        //             	data: [50, 20, 60, 31, 52, 22, 40],
        //             	spanGaps: false
        //         	},
        //         	{
        //             	label: "My First dataset",
        //             	fill: true,
        //             	backgroundColor: "rgba(75,192,192,0.4)",
        //             	borderColor: "rgba(75,192,192,1)",
        //             	borderCapStyle: 'butt',
        //             	borderDash: [],
        //             	borderDashOffset: 0.0,
        //             	borderJoinStyle: 'miter',
        //             	borderWidth: 1,
        //             	pointBorderColor: "rgba(75,192,192,1)",
        //             	pointBackgroundColor: "#fff",
        //             	pointBorderWidth: 1,
        //             	pointHoverRadius: 5,
        //             	pointHoverBackgroundColor: "rgba(75,192,192,1)",
        //             	pointHoverBorderColor: "rgba(220,220,220,1)",
        //             	pointHoverBorderWidth: 2,
        //             	pointRadius: 1,
        //             	pointHitRadius: 10,
        //             	data: [65, 59, 30, 81, 46, 55, 30],
        //             	spanGaps: false
        //         	}
        //     	]
        // 	}
    	// });
  	}
}