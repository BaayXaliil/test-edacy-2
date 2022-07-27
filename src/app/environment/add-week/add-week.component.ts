import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-week',
  templateUrl: './add-week.component.html',
  styleUrls: ['./add-week.component.css']
})
export class AddWeekComponent implements OnInit {

  sidebar_show: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
