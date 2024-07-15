import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-wishlistcard',
  templateUrl: './wishlistcard.component.html',
  styleUrls: ['./wishlistcard.component.scss']
})
export class WishlistcardComponent implements OnInit {
  @Input() course;
  //courseservice
  courseService:CoursesService;
  constructor(courseService:CoursesService) {
    this.courseService=courseService;
  }
  //flag for cart error
  cart_error:number;

  //Add to cart
  onAddtoCart(){
    this.cart_error=this.courseService.AddToCart({
    id:this.course.id,
    courseCreator:this.course.courseCreator,
    courseDescription:this.course.courseDescription,
    discount:this.course.discount,
    discountValidTill:this.course.discountValidTill,
    price:this.course.price,
    tags:this.course.tags,
    title:this.course.title
    });
    console.log(this.course.id);
    if(this.cart_error==0){
      alert("Course already in Cart");
    }
    else{
      alert("Course Added in Cart");
    }
  }

  //Delete from cart
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

  ngOnInit(): void {
  }
}
