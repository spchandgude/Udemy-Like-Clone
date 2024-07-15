import { Component, Input, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-cartcoursecard',
  templateUrl: './cartcoursecard.component.html',
  styleUrls: ['./cartcoursecard.component.scss']
})
export class CartcoursecardComponent implements OnInit {
  @Input() course;
  //courseservice
  courseService:CoursesService;
  constructor(courseService:CoursesService) {
    this.courseService=courseService;
  }

  //Delete Course from cart
  onDeleteFromCart(){
      this.courseService.DeleteFromCart({
      id:this.course.id,
      courseCreator:this.course.courseCreator,
      courseDescription:this.course.courseDescription,
      discount:this.course.discount,
      discountValidTill:this.course.discountValidTill,
      price:this.course.price,
      tags:this.course.tags,
      title:this.course.title
    });
  }

  //Delete Course from wishlist
  onDeleteFromWishlist(){
    this.courseService.DeleteFromWishlist({
      id:this.course.id,
      courseCreator:this.course.courseCreator,
      courseDescription:this.course.courseDescription,
      discount:this.course.discount,
      discountValidTill:this.course.discountValidTill,
      price:this.course.price,
      tags:this.course.tags,
      title:this.course.title
    })
  }

  //Add course to Wishlist
  onAddToWishlist(){
    this.courseService.AddToWishlist({
      id:this.course.id,
      courseCreator:this.course.courseCreator,
      courseDescription:this.course.courseDescription,
      discount:this.course.discount,
      discountValidTill:this.course.discountValidTill,
      price:this.course.price,
      tags:this.course.tags,
      title:this.course.title
    })
  }
  ngOnInit(): void {
  }
}
