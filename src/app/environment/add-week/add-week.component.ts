import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-week',
  templateUrl: './add-week.component.html',
  styleUrls: ['./add-week.component.css']
})
export class AddWeekComponent implements OnInit {

  sidebar_show: boolean = false;
  showInput: boolean = false
  color = "#717171"
  weekForm: Array<any> = new Array(1)
  constructor() { }

  ngOnInit(): void {
    this.weekForm[0] = {showInput: true, title: "title", description: "description"}
  }

  onSubmit(form: NgForm) {
    console.log(form)
  }

  onShowInput(week: any, index: number) {
    let i = 0;
    for(i; i<this.weekForm.length; i++) {
      if (i != index)
      this.weekForm[i].showInput = false
    }
    week.showInput = !week.showInput
  }

  onAddWeek() {
    this.weekForm = new Array(this.weekForm.length + 1)
    let i = 0;
    for(i; i<this.weekForm.length; i++) {
      this.weekForm[i] = {showInput: i == this.weekForm.length -1, title: "title-"+(i+1), description: "description-"+(i+1)}
    }
  }
}
