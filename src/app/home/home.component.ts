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
      src : "https://cdn.pixabay.com/photo/2016/08/03/13/56/vector-1566737_960_720.png",
      color: true
    }, {
      name : "Food",
      content : "Do you want to have Shivamogga special food delivered to your door step!?",
      src : "https://images.indianexpress.com/2018/04/order-food-online.jpg?w=759",
      color: true
    }, {
      name : "Shopping",
      content : "Do you want buy something from Shivamogga!?",
      src : "https://www.intheblack.com/-/media/intheblack/allimages/magazine-2018/11-november/small-shopping-bags.jpg?rev=2ad3af44e054440598b93c6c3c442aa1",
      color: true
    }, {
      name : "Travel",
      content : "Do you want to travel to the most exiting places near Shivamogga!?",
      //src : "https://cdn.pixabay.com/photo/2018/05/21/18/48/clipart-3419075_960_720.png",
      src : "https://cdn.pixabay.com/photo/2016/06/20/07/02/bus-1468141_960_720.png",
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
