import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {

  @ViewChild('testeCanvas') testeCanvas: ElementRef;

  dopes: number;
  nopes: number;
  chartVar: any;

  constructor(public navCtrl: NavController) {
    let rand;
    let rest;
    rand = this.getRandomInt(1,85);
    rest = 100 - rand;

    this.dopes = rand;
    this.nopes = rest;

    console.log('random', rand, rest);
  }

  ngAfterViewInit() {
    console.log('on after view init', this.testeCanvas.nativeElement);
    this.showChart();

  }

  showChart(){
    this.chartVar = new Chart(this.testeCanvas.nativeElement,{
      type: 'pie',
      data:{
        datasets: [{
          data:[this.dopes, this.nopes],
          backgroundColor:[
            'rgba(41, 255, 122, 1)',
            'rgba(255, 148, 12, 1)'
          ]
        }],
        labels:[
          'dope',
          'nope'
        ]
      },
      options:{
        tooltips:{
          enabled:true
        }
      }

    })
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
