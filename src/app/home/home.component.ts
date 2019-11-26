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
      src : "https://storage.googleapis.com/twg-content/images/MarketingResources_Thumbnail_Search.width-1200.jpg",
      color: true
    }, {
      name : "Food",
      content : "Do you want to have Shivamogga special food delivered to your door step!?",
      src : "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/themadscientistskitchen-gmail.com/Spongy_Quinoa_Idli_for_a_Healthy_Breakfast-2.jpg",
      color: false
    }, {
      name : "Shopping",
      content : "Do you want buy something from Shivamogga!?",
      src : "https://img.freepik.com/free-photo/shopping-trolley-with-packets_23-2147948107.jpg?size=338&ext=jpg",
      color: true
    }, {
      name : "Travel",
      content : "Do you want to travel to the most exiting places near Shivamogga!?",
      src : "https://cdn.pixabay.com/photo/2019/02/28/04/54/car-4025379_960_720.png",
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
