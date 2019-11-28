import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { HomeService } from '../services/home.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  requestData: any[] = [];
  responseData: any = [];
  select1: any;
  select2: any;

  constructor(private service: HomeService) { }

  ngOnInit() {
  }

  searchData() {
    this.requestData['search_data'] = this.requestData['search_data'] == undefined ? "" : this.requestData['search_data'];
    this.requestData['search_category'] = this.requestData['search_category'] == undefined ? this.select1="-- select --" && "" : this.requestData['search_category'];
    this.requestData['search_area'] = this.requestData['search_area'] == undefined ? this.select2="-- select --" && "" : this.requestData['search_area'];
    if (Object.values(this.requestData).length === 0) {
      console.log("length 0");
    } else if (this.requestData['search_data'] === '') {
      console.log("empty search");
    } else if (this.requestData['search_category'] === '-- select --') {
      console.log("empty category");
    } else if (this.requestData['search_area'] === '-- select --') {
      console.log("empty area");
    } else {
      console.log(this.requestData);
      let searchValues = {
        "search_data": this.requestData['search_data'],
        "search_category": this.requestData['search_category'],
        "search_area": this.requestData['search_area']
      }
      this.service.getHomePageData(searchValues)
        .subscribe(data => this.responseData = data);
      console.log("Search Response: " + this.responseData);
    }
  }

  clearData() {
    this.requestData = [];
    this.responseData = [];
    this.select1="-- select --";
    this.select2="-- select --";
  }


}
