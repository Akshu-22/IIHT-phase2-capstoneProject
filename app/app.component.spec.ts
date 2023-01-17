import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutPageComponent } from './About-Us/about-page.component';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './Contact-Us/contact-page.component';
import { ElectronicListComponent } from './Electronic/electronic-list.component';
import { FashionListComponent } from './Fashion/fashion-list.component';
import { HomePageComponent } from './Home/home-page.component';
import { LoginComponent } from './user/login.component';
import { VegesListComponent } from './veges/veges-list.component';
import {Location} from '@angular/common';
import { CartComponent } from './shopping-cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule,
        MatToolbarModule,MatIconModule,MatMenuModule,
        FormsModule, RouterTestingModule.withRoutes(
          [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'',pathMatch:'full' ,component:HomePageComponent},
  {path:'home',component: HomePageComponent},
  {path:'fashion',component:FashionListComponent},
  {path:'electronic',component: ElectronicListComponent},
  {path:'about',component: AboutPageComponent},
  {path:'contact',component:ContactPageComponent},
  { path:'login',component:LoginComponent},

  {path:'shopCart',
  loadChildren:()=>import('./shopping-cart/shopping-cart.module').then((v)=>v.ShoppingCartModule)},
  
  {path:'veges',
  component: VegesListComponent,
  loadChildren:()=>import('./veges/veges.module').then((v)=>v.VegesModule),},

  {path:'**',component:PagenotfoundComponent}
   ] ),
       
      ],
      declarations: [
        AppComponent,VegesListComponent,LoginComponent,
        HomePageComponent,FashionListComponent,
        ContactPageComponent,ElectronicListComponent,AboutPageComponent,CartComponent,
      ],
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  /* --- test case for Create app ---*/

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /* --- test case for Title as InstaMart ---*/

  it(`should have as title 'InstaSMart'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('InstaSMart');
  });

  /* --- test case for Redirects to Home ---*/

   it(`navigate to "" redirects you to /home`, fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/home");
    });
  })); 
  
  /* --- test case for Navigate to Home Page ---*/
 
  it(`navigate to "home Page" takes you to /home`, fakeAsync(() => {
    router.navigate(["/home"]).then(() => {
      expect(location.path()).toBe("/home");
    });
  })); 
  
  /* --- test case for Navigate to Fashion Page ---*/
  
  it(`navigate to "Fashion Page" takes you to /fashion`, fakeAsync(() => {
    router.navigate(["/fashion"]).then(() => {
      expect(location.path()).toBe("/fashion");
    });
  }));  

  /* --- test case for Navigate to Electronic Page ---*/

  it(`navigate to "Electronic Page" takes you to /electronic`, fakeAsync(() => {
    router.navigate(["/electronic"]).then(() => {
      expect(location.path()).toBe("/electronic");
    });
  }));  

  /* --- test case for Navigate to About Us Page ---*/

  it(`navigate to "about Us Page" takes you to /about`, fakeAsync(() => {
    router.navigate(["/about"]).then(() => {
      expect(location.path()).toBe("/about");
    });
  })); 
  
  /* --- test case for Navigate to Contact Us Page ---*/
  
  it(`navigate to "Contact Us Page" takes you to /contact`, fakeAsync(() => {
    router.navigate(["/contact"]).then(() => {
      expect(location.path()).toBe("/contact");
    });
  }));  

  /* --- test case for Navigate to Login Page ---*/
  
  it(`navigate to "Login Page" takes you to /login`, fakeAsync(() => {
    router.navigate(["/login"]).then(() => {
      expect(location.path()).toBe("/login");
    });
  })); 
  
  /* --- test case for Navigate Vegetable List ---*/
   
  it(`navigate to "Vegetable List Page" takes you to /veges`, fakeAsync(() => {
    router.navigate(["/home/veges"]).then(() => {
      expect(location.path()).toBe("/home/veges");
    });
  })); 

  /* --- test case for Navigate Shopping Cart Page ---*/
  
  it(`navigate to "Shopping Cart Page" takes you to /shopCart`, fakeAsync(() => {
    router.navigate(["/home/shopCart"]).then(() => {
      expect(location.path()).toBe("/home/shopCart");
    });
  }));  
   
  /* --- test case for Page Not Found ---*/
  it(`navigate to "Page Not Found" takes you to /**`, fakeAsync(() => {
    router.navigate(["/**"]).then(() => {
      expect(location.path()).toBe("/**");
    });
  }));  

});
