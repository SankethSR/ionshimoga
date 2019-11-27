import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
//import { RequestOptions} from "@angular/http";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    APIURL = 'https://www.ionshimoga.com/search.php';
    constructor(private http: HttpClient) { }


    getHomePageData(data) {
        var searchURL = this.APIURL;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let body = data;
        console.log("Service called, URL : " + searchURL);
        return this.http.post(searchURL, body, { headers })
    }

}