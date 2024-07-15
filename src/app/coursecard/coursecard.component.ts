import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.scss']
})
export class CoursecardComponent implements OnInit {
  @Input() course;
  //flag to to detect cart error
  cart_error:number;
  //flag to to detect wishlist error
  wishlist_error:number;
  //courseserivce
  courseService:CoursesService;

  constructor(courseService:CoursesService) {
    this.courseService=courseService;
  }

  //Add course to cart
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
      window.alert("Course already in Cart");
    }
    else{
      window.alert("Course Added in Cartt");
    }
  }

  //Add course to wishlist
  onAddToWishlist(){
    this.wishlist_error=this.courseService.AddToWishlist({
      id:this.course.id,
      courseCreator:this.course.courseCreator,
      courseDescription:this.course.courseDescription,
      discount:this.course.discount,
      discountValidTill:this.course.discountValidTill,
      price:this.course.price,
      tags:this.course.tags,
      title:this.course.title
    });
    if(this.wishlist_error==0){
      alert("Course already in Wishlist");
    }
    else{
      alert("Course Added in Wishlist");
    }
  }
  ngOnInit(): void {
  }

}
