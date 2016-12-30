import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  AUTO_STYLE
} from '@angular/core';

import {NgxChartsModule} from 'ngx-charts';


export var single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }
];

export var multi = [
  {
    "name": "Germanyyxcyxcy",
    "series": [
      {
        "name": "2010",
        "value": 100000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];





@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  animations: [
    trigger('body', [
      state('inactive', style({
        height: '0px',
        overflow: 'hidden'
      })),
      state('active', style({
        height: AUTO_STYLE,
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class EntryComponent implements OnInit {

  body = 'inactive';




  single: any[];
  multi: any[];

  view: any[] = [900, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { 

 Object.assign(this, {single, multi})  

  }

  ngOnInit() {
  }

  toggle() {
    if (this.body == "inactive") {
      this.body = "active"
    } else {
      this.body = "inactive"
    }
  }
}
