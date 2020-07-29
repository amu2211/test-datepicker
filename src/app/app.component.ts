import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  model: any;

  title = 'test-datepicker';
  ngOnInit(): void {
    this.model = { date : new Date()};

    setInterval(() => {
      this.model.date.setMonth(this.model.date.getMonth() + 1);
    }, 1000);
  }

}



