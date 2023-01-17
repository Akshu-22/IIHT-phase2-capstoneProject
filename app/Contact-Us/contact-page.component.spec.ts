import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ContactPageComponent } from './contact-page.component';

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,HttpClientTestingModule,
        FormsModule,RouterTestingModule,
    ],
      declarations: [ ContactPageComponent ],
      providers: [provideMockStore({})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*  --- test case for Name testing ---  */

  it('should check Name', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1).toBeTruthy();
  });

  it('should have Name type of text', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });

  it('should have Name type as name', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('name');
  });

  it('should check Name input value is correct', () => {
    let name=component.contactForm.controls['name'];
    name.setValue('Akshata');
    expect(name.errors).toBeNull();    
  });

 /*  --- test case for Email testing ---  */

  it('should check Email', () => {
    const e1 =fixture.debugElement.query(By.css('#email'));
    expect(e1).toBeTruthy();
  });

  it('should have Email type of text', () => {
    const e1 =fixture.debugElement.query(By.css('#email'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });

  it('should have Email type as email', () => {
    const e1 =fixture.debugElement.query(By.css('#email'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('email');
  });

  it('should check Email input value is correct', () => {
    let name=component.contactForm.controls['email'];
    name.setValue('Akshata@gmail.com');
    expect(name.errors).toBeNull();    
  });

   /*  --- test case for Mobile Number testing ---  */

  it('should check Mobile Number', () => {
    const e1 =fixture.debugElement.query(By.css('#number'));
    expect(e1).toBeTruthy();
  });

  it('should have Mobile Number type of text', () => {
    const e1 =fixture.debugElement.query(By.css('#number'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });

  it('should have name type as number', () => {
    const e1 =fixture.debugElement.query(By.css('#number'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('number');
  });

   /*  --- test case for Ask Query testing ---  */

  it('should check Ask Query', () => {
    const e1 =fixture.debugElement.query(By.css('#query'));
    expect(e1).toBeTruthy();
  });

  it('should have Ask Query type as name', () => {
    const e1 =fixture.debugElement.query(By.css('#query'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('query');
  });

  it('should check Query input value is correct', () => {
    let name=component.contactForm.controls['query'];
    name.setValue('Hello there');
    expect(name.errors).toBeNull();    
  });

  /* --- test case for Button Disable --- */

  it('should check submit button disabled', () => {
    fixture.detectChanges();
    let btn=fixture.debugElement.query(By.css('#btn')).nativeElement ;
    expect(btn.disabled).toBe(true );
   })
});
