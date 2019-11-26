import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
//import { RequestOptions} from "@angular/http";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    APIURL = 'http://localhost:9090';
    constructor(private http: HttpClient) { }

    
    getHomePageData() {
        // var incidentcommserviceURL = this.APIURL + "/openissues/0/8";
        // console.log("Service called, URL : " + incidentcommserviceURL);
        // return this.http.get(incidentcommserviceURL)
        console.log("Service called, URL : " + "");
        return this.http.get("")
    }

}