import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ɵNgNoValidate } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from './course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService implements OnInit{
  //Arrays to store courses,cart-courses and wishlist-courses
  public cartCourses:any = [];
  public wishlistCourses:any = [];
  constructor(private http: HttpClient){}

  //Fetching the courses from json API
  fetchCourses(): Observable <ICourse[]>{
    const url ='./assets/jsons/courses.json'
    return this.http.get<ICourse[]>(url);
  }

  //Accumulators for storing cart data
  TotalAmount=0;
  SavedAmount=0;
  CountOfCourses=0;

  //Adding course to wishlist
  AddToWishlist(coursewishlisted):number{
    const pos = this.wishlistCourses.findIndex((course)=>{
      return course.id===coursewishlisted.id;
    })
    if(pos!==-1){
      console.log("Already in wishlist");
      return 0;
    }
    else{
      const pos = this.cartCourses.findIndex((course)=>{
        return course.id===coursewishlisted.id;
      })
      if(pos!==-1){
        this.DeleteFromCart(coursewishlisted);
      }
      this.wishlistCourses.push(coursewishlisted);
      return 1;
    }
  }
  //Adding course to cart
  AddToCart(courseincart):number{
    const pos = this.cartCourses.findIndex((course)=>{
      return course.id===courseincart.id;
    })
    if(pos!==-1){
      return 0;
    }
    else{
      const pos = this.wishlistCourses.findIndex((course)=>{
        return course.id===courseincart.id;
      })
      if(pos!==-1){
        this.DeleteFromWishlist(courseincart);
      }
      this.TotalAmount = this.TotalAmount+courseincart.price;
      this.SavedAmount = this.SavedAmount+courseincart.price*courseincart.discount*0.01;
      this.CountOfCourses=this.CountOfCourses+1;
      this.cartCourses.push(courseincart);
      return 1;
    }
  }

  //Deleting course from cart
  DeleteFromCart(courseincartToBeDeleted){
    this.TotalAmount = this.TotalAmount-courseincartToBeDeleted.price;
    this.SavedAmount = this.SavedAmount-courseincartToBeDeleted.price*courseincartToBeDeleted.discount*0.01;
    this.CountOfCourses=this.CountOfCourses-1;
    this.cartCourses=this.cartCourses.filter(course=>course.id!==courseincartToBeDeleted.id)
  }

  //Deleting from wishlist
  DeleteFromWishlist(courseinwishlistToBeDeleted){
    this.wishlistCourses=this.wishlistCourses.filter(course=>course.id!==courseinwishlistToBeDeleted.id);
  }

  //Retriving courses in Cart
  getCartCourse(){
    return this.cartCourses.slice();
  }

  //Retriving courses in Wishlist
  getWishlistCourse(){
    return this.wishlistCourses.slice();
  }

  ngOnInit(): void {}

}
