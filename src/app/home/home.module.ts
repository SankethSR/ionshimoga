import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from '../services/home.service';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { SearchModule } from './search/search.module';

@NgModule({
    declarations: [
        HomeComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        SearchModule,
        HomeRoutingModule
    ],
    providers: [
        HomeService
    ],
})

export class HomeModule {

}