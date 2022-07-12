import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  data = {
    current_page: 1,
    last_page: 20,
    per_page: 15
  };
  currentPage = 1;
  lastPage    = 1;
  perPage     = 15;
  
  ngOnInit(): void {
    if (this.data) {
      this.currentPage  = this.data.current_page;
      this.lastPage     = this.data.last_page;
      this.perPage      = this.data.per_page;
    }
  }

  setNewPage(page) {
    this.currentPage = page;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
