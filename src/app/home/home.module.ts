import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        BrowserModule,
        HomeRoutingModule,
        FormsModule
    ],
    providers: [],
})

export class HomeModule {

}