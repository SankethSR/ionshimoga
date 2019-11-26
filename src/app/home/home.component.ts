import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homePageResultSet: any[] = [
    {
      name : "Search",
      content : "Do you want to know more about Shivamogga!?",
      src : "./assets/images/search.png",
      color: true
    }, {
      name : "Food",
      content : "Do you want to have Shivamogga special food delivered to your door step!?",
      src : "./assets/images/food.PNG",
      color: true
    }, {
      name : "Shopping",
      content : "Do you want buy something from Shivamogga!?",
      src : "./assets/images/shopping.jpg",
      color: true
    }, {
      name : "Travel",
      content : "Do you want to travel to the most exiting places near Shivamogga!?",
      //src : "https://cdn.pixabay.com/photo/2018/05/21/18/48/clipart-3419075_960_720.png",
      src : "./assets/images/travel.png",
      color: true
    }
  ];

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.onHomePageData();
  }

  onHomePageData() {
    console.log("~~~ Entering onHomePageData() ~~~");
    // this.service.getHomePageData()
    // .subscribe(data => {
    //   console.log(data)
    // });
  }

}
