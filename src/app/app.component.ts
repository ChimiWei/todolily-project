import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolily';
  darkmodeState = true;
  day: string = "all"
  
  setModeState(state: boolean) {
    this.darkmodeState = state;
  }
  setDayView(day: string) {
    if(this.day === day) {
      this.day = "all"
    } else {
      this.day = day; 
    }
    

  }

  
}
