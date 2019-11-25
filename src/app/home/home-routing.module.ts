import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'homeComponent/searchComponent',
                component: SearchComponent
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class HomeRoutingModule { }
