import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from '../course';
import { CoursesService } from '../courses.service';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public courses:any = [];
  //course serice
  coursesService:CoursesService;
  constructor(coursesService:CoursesService,private http: HttpClient){
    this.coursesService=coursesService;
  }

  //Comapartor to sort courses form low price to high price
  comparePriceLowToHigh = function (course1: any, course2: any) {
    if (course1.price > course2.price) { return 1; }
    if (course1.price < course2.price) {return -1; }
    return 0;
  }

  //Comapartor to sort courses form high price to low price
  comparePriceHighToLow = function (course1: any, course2: any) {
    if (course1.price > course2.price) { return -1; }
    if (course1.price < course2.price) {return 1; }
    return 0;
  }

  //Sorting the courses
  sortByPrice(){
    var sortedArray = this.courses.sort(this.comparePriceLowToHigh);
    console.log(sortedArray);
  }

  //Reverse sort courses
  reverseByPrice(){
    var sortedArray = this.courses.sort(this.comparePriceHighToLow);
    console.log(sortedArray);
  }

  //page number
  p: number = 1;

  ngOnInit(): void {
    console.log("hey");
    this.coursesService.fetchCourses().subscribe(data => this.courses=data);
  }
}
