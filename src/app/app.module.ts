import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';// add for httpclient for rest api..
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { BooklistComponentComponent } from './book-component/booklist-component/booklist-component.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ContainerComponent } from './container/container.component';
import { ProductService } from './product/services/product.service';
import { PostsComponent } from './posts/posts.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostAddComponent } from './posts/post-add/post-add.component';
import { PhotosComponent } from './photos/photos.component';

import { CustominterceptorService } from './interceptor/custominterceptor.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeModule } from './employee/employee.module';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    BookComponentComponent,
    BooklistComponentComponent,
    ProductComponent,
    ProductListComponent,
    ContainerComponent,
    PhotosComponent,
    NotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //add this module.
    FormsModule,
    ReactiveFormsModule,
    EmployeeModule,
    PostsModule
  ],
  providers: [{ provide: ProductService, useClass: ProductService },
  { provide: HTTP_INTERCEPTORS, useClass: CustominterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
