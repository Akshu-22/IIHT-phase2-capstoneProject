import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,HttpClientTestingModule,
        FormsModule,
    ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* --- UserName Testing --- */

  it('should check userName', () => {
    const e1 =fixture.debugElement.query(By.css('#userName'));
    expect(e1).toBeTruthy();
  });
  it('should have userName type of text', () => {
    const e1 =fixture.debugElement.query(By.css('#userName'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should have name as userName', () => {
    const e1 =fixture.debugElement.query(By.css('#userName'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('userName');
  });

  /* --- Password Testing --- */

  it('should check Password', () => {
    const e1 =fixture.debugElement.query(By.css('#password'));
    expect(e1).toBeTruthy();
  });
  it('should have type of password for password', () => {
    const e1 =fixture.debugElement.query(By.css('#password'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('password');
  });
  it('should have type of password for password', () => {
    const e1 =fixture.debugElement.query(By.css('#password'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('password');
  });

  /* --- Button Disable Testing --- */

  it('should check login button disabled', () => {
    fixture.detectChanges();
    let btn=fixture.debugElement.query(By.css('#btn')).nativeElement ;
    expect(btn.disabled).toBe(true );
   })

});
