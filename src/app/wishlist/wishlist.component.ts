import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public wishlistcourses:any = [];
  //courseservice
  coursesService:CoursesService;

  constructor(coursesService:CoursesService){
    this.coursesService=coursesService;
  }

  ngOnInit(): void {
    this.coursesService.getWishlistCourse();
  }
}
