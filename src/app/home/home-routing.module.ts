import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'homeComponent/searchComponent',
        component: SearchComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: true })],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
