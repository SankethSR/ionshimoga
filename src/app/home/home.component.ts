import { Component, OnInit, Output, Input } from '@angular/core';
import { HomeService } from './services/home.service';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  router:String;
  homePageResultSet: any[] = [
    {
      name : "Search",
      content : "Do you want to know more about Shivamogga!?",
      src : "./assets/images/search.png",
      color: true,
      component: 'searchComponent'
    }, {
      name : "Food",
      content : "Do you want to have Shivamogga's special food delivered to your door step!?",
      src : "./assets/images/food.PNG",
      color: true,
      component: 'foodComponent'
    }, {
      name : "Shopping",
      content : "Do you want buy something in Shivamogga!?",
      src : "./assets/images/shopping.jpg",
      color: true,
      component: 'shoppingComponent'
    }, {
      name : "Travel",
      content : "Do you want to travel to the most exiting places near Shivamogga!?",
      //src : "https://cdn.pixabay.com/photo/2018/05/21/18/48/clipart-3419075_960_720.png",
      src : "./assets/images/travel.png",
      color: true,
      component: 'travelComponent'
    }
  ];

  constructor(private service: HomeService, private _router: Router) {
    this.router = _router.url;
   }

  ngOnInit() {
    this.onHomePageData();
    // this.showComponent();
  }

  onHomePageData() {
    console.log("~~~ Entering onHomePageData() ~~~");
    // this.service.getHomePageData()
    // .subscribe(data => {
    //   console.log(data)
    // });
  }
}
