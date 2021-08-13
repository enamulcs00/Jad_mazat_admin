import { Component, OnInit, NgZone } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { ApiService } from "../../services/api/api.service";
import { CommonService } from "../../services/common/common.service";
import { Router } from "@angular/router";
import * as FusionCharts from "fusioncharts"


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  tokenVal;
  DashboarddData;
  dashData: any;
  dataSource: any;
  dataSource1: any;
  dataSource2: any;
  dataSource3: any;
  type: string;
  arrayone = [];
  arraythree = [];
  arrayfour = [];
  width: string;
  arrayrevenue = [];
  arraytwo = [];
  arrayfive = [];
  arraysix = [];
  arrayseven= [];
  arrayeight = [];
  serialNumber = 0;
  height: string;
  dataFormat = "json";
  areaData: any;
  saleData: any;
  statsData: any;
  totalmatch = 'weekly'
  totalResomatch = '3';
  totalResrevmatch = '1';

  orderdata: any;
  revenuedata: any;
  foodItem: any;
  loader: boolean;
  imageUrl: string;
  storeItem: any;



  dataSource4: any;
  totalItems: any;
  type1: string;
  type2: string;
  type3: string;
  revenuematch = 'w';
  revenuematchrev = 'weekly';

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = this.arrayone;
  public barChartorder: ChartDataSets[] = [
    { data: this.arraytwo, label: 'Orders' }
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];
 

 public barChartLabelsorder: Label[] = this.arraythree;
  public barChartData: ChartDataSets[] = [
    { data: this.arrayfour, label: 'Revenue' }
  ];

  public barChartLabelsResorder: Label[] = this.arrayfive;
  public barChartDataRes: ChartDataSets[] = [
    { data: this.arraysix, label: 'Orders' }
  ];

  public barChartLabelsRrev: Label[] = this.arrayseven;
  public barChartDatarev: ChartDataSets[] = [
    { data: this.arrayeight, label: 'Revenue' }
  ];
  resordertime = 'weekly';
  resrevtime = 'weekly';

  constructor(private api: ApiService,
    private comm: CommonService,
    private router: Router) {
    this.type = "timeseries";
    this.width = "100%";
    this.height = "500";
    this.dataSource = {
      chart: {
        "paletteColors": "#0372AB"
      },
      navigator: {
        enabled: 0
      },
      caption: {
        text: ""
      },
      yaxis: [
        {
          plot: {
            value: "Restaurant Revenue",
            type: "column"
          },
          format: {
            suffix: ""
          },
          title: ""
        }
      ]
    };
    this.dataSource1 = {
      chart: {
        "paletteColors": "#4e73df"
      },
      caption: {
        text: ""
      },
      navigator: {
        enabled: 0
      },
      yaxis: [
        {
          plot: {
            value: "Store Revenue",
            type: "column"
          },
          format: {
            suffix: ""
          },
          title: ""
        }
      ]
    };
    this.dataSource2 = {
      chart: {
        "paletteColors": "#0372AB"
      },
      caption: {
        text: ""
      },
      navigator: {
        enabled: 0
      },
      yaxis: [
        {
          plot: {
            value: "Ride Booking Revenue",
            type: "column"
          },
          format: {
            suffix: ""
          },
          title: ""
        }
      ]
    };
    this.dataSource3 = {
      chart: {
        "paletteColors": "#0372AB"
      },
      navigator: {
        enabled: 0
      },
      caption: {
        text: ""
      },
      yaxis: [
        {
          plot: {
            value: "Restaurant Revenue",
            type: "column"
          },
          format: {
            suffix: ""
          },
          title: ""
        }
      ]
    };

    this.dataSource4 = {
      chart: {
        "paletteColors": "#0372AB"
      },
      navigator: {
        enabled: 0
      },
      caption: {
        text: ""
      },
      yaxis: [
        {
          plot: {
            value: "Restaurant Revenue",
            type: "column"
          },
          format: {
            suffix: ""
          },
          title: ""
        }
      ]
    };

    this.fetchData();
    this.fetchRevenueTaxi();
    this.fetchRevenueStore();
    this.fetchRevenueShuttle();
    this.fetchStoreShuttle();
  }

  ngOnInit() {
    this.imageUrl = this.comm.imageUrl;
    this.getDashboardData();
    this.updatedFood();
    this.updatedStore();
  }

  getDashboardData() {
    this.api.getDashboard().subscribe(response => {
      if (response['response']['success']) {
        this.statsData = response['data'];
      }
    });
  }


  fetchData() {
    var jsonify = res => res.json();
    var schemaFetch =
      [{
        "name": "Time",
        "type": "date",
        "format": "%-d/%-m/%Y"
      }, {
        "name": "Restaurant Revenue",
        "type": "number"
      }]
    this.api.getRestaurantBookingAnalytic().subscribe((response: any) => {
      var dataFetch = response.data;
      Promise.all([dataFetch, schemaFetch]).then(res => {
        const [data, schema] = res;
        // First we are creating a DataStore
        const fusionDataStore = new FusionCharts.DataStore();
        // After that we are creating a DataTable by passing our data and schema as arguments
        const fusionTable = fusionDataStore.createDataTable(data, schema);
        // Afet that we simply mutated our timeseries datasource by attaching the above
        // DataTable into its data property.
        this.dataSource3.data = fusionTable;
      });
    });
  }

  fetchRevenueTaxi() {
   this.arrayfive = [];
   this.arraysix = [];
    // resturant order api resrevtime
    this.api.getResturantApi(this.resrevtime).subscribe((response: any) => {
      response.data.Orders.forEach(element => {
        this.arrayfive.push(element[0])
        this.arraysix.push(element[1])
      });
      setTimeout(() => {
        this.barChartLabelsResorder = this.arrayfive;
        this.barChartDataRes = [
    { data: this.arraysix, label: 'Orders' }
  ];
   }, 1000);

    });
  }

  fetchRevenueStore() {
  // revenue of resturant
  this.arrayseven = [];
  this.arrayeight = [];
    this.api.getResturantrevApi(this.resordertime).subscribe((response: any) => {
      this.arrayrevenue = response.data.Revenue;
      response.data.Revenue.forEach(element => {
        this.arrayseven.push(element[0])
        this.arrayeight.push(element[1])
      });

      setTimeout(() => {
        this.barChartLabelsRrev = this.arrayseven;
        this.barChartDatarev = [
          { data: this.arrayeight, label: 'Revenue' }
        ];
   }, 1000);
    });
  }

  fetchRevenueShuttle() {
 // order store
  this.arraythree = [];
  this.arrayfour = [];
    this.api.getStoreApi(this.totalmatch).subscribe((response: any) => {
      response.data.Orders.forEach(element => {
        this.arraythree.push(element[0])
        this.arrayfour.push(element[1])
      });
      
    });

    setTimeout(() => {
      // barChartLabels
      // barChartData
      this.barChartLabels = this.arraythree;
      this.barChartData = [
        { data: this.arrayfour, label: 'Orders' }
      ];
 }, 1000);
  }

  fetchStoreShuttle() {
  this.arrayone = [];
  this.arraytwo = [];
    this.api.getStorerevApi(this.revenuematchrev).subscribe((response: any) => {
      this.arrayrevenue = response.data.Revenue;
         response.data.Revenue.forEach(element => {
           this.arrayone.push(element[0])
           this.arraytwo.push(element[1])
         });
     setTimeout(() => {
       
     }, 1000);
         console.log('arrayrev',this.arrayone,this.arraytwo)
    });
    // public barChartLabels: Label[] = this.arrayone; barChartorder barChartLabelsorder
    // public barChartorder: ChartDataSets[] = [
    //   { data: this.arraytwo, label: 'Orders' }
    // ];
    setTimeout(() => {
         this.barChartLabelsorder = this.arrayone;
     this.barChartorder = [
      { data: this.arraytwo, label: 'Revenue' }
    ];
    }, 1000);
  }

  // getResturantrevApi
  // getResturantApi

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  checkRoute()
  {
    this.router.navigate(['/restaurant/food-item'],{queryParams:{"id":'fooditem'}});
  }

  checkStoreR()
  {
    this.router.navigate(['/store/food-item'],{queryParams:{"id":'storeitem'}});
  }

  updatedFood()
  {
    this.api.getResturantUp().subscribe((res:any)=>
    {
      if (res["response"]["success"]) {
        this.foodItem = res["data"].list;
        this.totalItems = res["data"].count
        for (var data of this.foodItem) {
          data.status = data["status"] == 1 ? true : false;
          
        }
        this.loader = false;
      }
    })
  }

  updatedStore()
  {
    this.api.getStoreUpdate().subscribe((res:any)=>
    {
      if (res["response"]["success"]) {
        this.storeItem = res["data"].list;
        for (var data of this.storeItem) {
          data.status = data["status"] == 1 ? true : false;
        }
        this.loader = false;
      }
    })
  }

  checkGraph(event)
  {
 this.totalmatch = event.target.value
 this.fetchRevenueShuttle();
  }

  checkrevenue(event)
  {
  this.revenuematchrev = event.target.value === 'w' ? 'weekly' : 'monthly';
 
  this.fetchStoreShuttle()

  }

  checkRevRes(event)
  {
   this.resordertime = event.target.value == '1' ? 'weekly' : 'monthly';
   this.fetchRevenueStore();
  }

  checkResorder(event)
  {
   this.resrevtime = event.target.value == '3' ? 'weekly' : 'monthly';
   this.fetchRevenueTaxi();
  }

}