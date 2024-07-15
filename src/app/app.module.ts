import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';

import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { CoursecardComponent } from './coursecard/coursecard.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartcoursecardComponent } from './cartcoursecard/cartcoursecard.component';
import { WishlistcardComponent } from './wishlistcard/wishlistcard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CoursesComponent,
    CoursecardComponent,
    ProfileComponent,
    CartComponent,
    WishlistComponent,
    CartcoursecardComponent,
    WishlistcardComponent,
    FooterComponent,
    CoursedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports:[
    NgxPaginationModule,
  ],

  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
