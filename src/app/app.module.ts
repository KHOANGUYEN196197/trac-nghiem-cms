import { RatingComponent } from '../app/components/navbar/rating/rating.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpConfigInterceptor } from './interceptors/httpconfig.interceptor';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";

import { AppComponent } from "./app.component";
import { AgmCoreModule } from "@agm/core";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CountdownModule } from 'ngx-countdown';
import { ToastrModule } from 'ng6-toastr-notifications';
import { NgxStarRatingModule } from 'ngx-star-rating';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    CountdownModule,
    AppRoutingModule,
    NgxStarRatingModule,
    MatDialogModule,
    
    AgmCoreModule.forRoot({
      apiKey: "YOUR_GOOGLE_MAPS_API_KEY",
    }),
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
    RatingComponent,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpConfigInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
