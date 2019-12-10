import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "artur's App";
  firstname = 'Artur';
  courseNum = 1;
  courses = [
    { id : 1, name : "Course 1"},
    { id : 2, name : "Course 2"},
    { id : 3, name : "Course 3"}
  ];
  viewMode = 'list';

  onCourseAdd() {
    console.log("OoAddClicked");
    $.error('jquery error example');
  }

  titleChange() {
    this.title = "Artur's app title changed."
    
  }
}
