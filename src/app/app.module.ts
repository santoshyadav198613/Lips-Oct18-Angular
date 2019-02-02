import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // add for httpclient for rest api..

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { BooklistComponentComponent } from './book-component/booklist-component/booklist-component.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ContainerComponent } from './container/container.component';
import { ProductService } from './product/services/product.service';
import { PhotosComponent } from './photos/photos.component';

import { CustominterceptorService } from './interceptor/custominterceptor.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeModule } from './employee/employee.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { UserPipe } from './custom/user.pipe';
import { RegistrationComponent } from './registration/registration.component';
import { EmailvalidatonDirective } from './custom/directive/emailvalidaton.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProfileComponent } from './profile/profile.component';
import { APP_CONFIG, IAppConfig } from './custom';

const AppConfig: IAppConfig = {
  apiEndPoint: environment.apiEndpoint
};

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
    LoginComponent,
    UserPipe,
    RegistrationComponent,
    EmailvalidatonDirective,
    ProductDetailsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // add this module.
    SharedModule,
    EmployeeModule,
    // PostsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: ProductService, useClass: ProductService },
  { provide: APP_CONFIG, useValue: AppConfig },
  { provide: HTTP_INTERCEPTORS, useClass: CustominterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
