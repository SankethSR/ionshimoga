import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isHome:boolean = true;
  private isAbout:boolean = false;

  setCurrent(event){
    console.log(event.target.innerText);
    if(event.target.innerText == 'Home'){
      this.isHome = true;
      this.isAbout = false
    }else{
      this.isHome = false;
      this.isAbout = true;
    }
  }

}
