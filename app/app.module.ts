import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HomePageComponent } from './Home/home-page.component';
import { FashionListComponent } from './Fashion/fashion-list.component';
import { ElectronicListComponent } from './Electronic/electronic-list.component';
import { FurnitureListComponent } from './Furniture/furniture-list.component';
import { HomekitchenListComponent } from './HomeKitchen/homekitchen-list.component';
import { AboutPageComponent } from './About-Us/about-page.component';
import { ContactPageComponent } from './Contact-Us/contact-page.component';
import { FashionDetailComponent } from './Fashion/fashion-detail.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DbService } from './shared/DbService';
import { MatNativeDateModule } from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ElectronicDetailsComponent } from './Electronic/electronic-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FashionListComponent,
    ElectronicListComponent,
    FurnitureListComponent,
    HomekitchenListComponent,
    AboutPageComponent,
    ContactPageComponent,
    FashionDetailComponent,
    ElectronicDetailsComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(DbService),
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
   // MaterialExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
