import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  requestData: any[] = [];
  responseData:any = [];

  constructor(private service: HomeService) { }

  ngOnInit() {
  }

  searchData() {
    console.log(this.requestData);

    let searchValues = {
      "search_data": this.requestData['search_data'],
      "category": this.requestData['category'],
      "area": this.requestData['area']
    }
    this.service.getHomePageData(searchValues)
      .subscribe(data => this.responseData = data);
    console.log("Search Response: " + this.responseData);
  }

  clearData() {
    this.requestData = [];
    this.responseData = [];
  }


}
