import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        BrowserModule,
        HomeRoutingModule
    ],
    providers: [],
})

export class HomeModule {

}