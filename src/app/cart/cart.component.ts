import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartcourses:any = [];

  //courseservice
  coursesService:CoursesService;
  constructor(coursesService:CoursesService){
    this.coursesService=coursesService;
  }

  //Checkout
  onCheckout(){
    alert("You have successfully placed your order");
  }

  ngOnInit(): void {
    this.coursesService.getCartCourse()
  }
}
