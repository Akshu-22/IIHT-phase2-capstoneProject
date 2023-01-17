import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { VegesAddComponent } from './veges-add.component';


describe('VegesAddComponent', () => {
  let component: VegesAddComponent;
  let fixture: ComponentFixture<VegesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
       // StoreModule.provideStore({})
    ],
      declarations: [ VegesAddComponent ],
      providers: [provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   /* --- test case for Vegetable Name --- */

  
  it('should check Vegetable Name', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1).toBeTruthy();
  });
  
  it('should have VegetableName type of text', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });

  it('should have name as Vegetable Name', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('name');
  });

   it('should check Vegetable Name input value is correct', () => {
    let name=component.addVegetable.controls['name'];
    name.setValue('Tomato');
    expect(name.errors).toBeNull();    
  }); 

  /* ---  test case for Vegetable price --- */


  it('should check Vegetable Price', () => {
    const e1 =fixture.debugElement.query(By.css('#price'));
    expect(e1).toBeTruthy();
  });

  it('should have Vegetable Price type of number', () => {
    const e1 =fixture.debugElement.query(By.css('#price'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('number');
  });

  it('should have name as Price', () => {
    const e1 =fixture.debugElement.query(By.css('#price'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('price');
  });

   it('should check Price input value is correct', () => {
    let price=component.addVegetable.controls['price'];
    price.setValue('100');
    expect(price.errors).toBeNull();    
  }); 

   /* --- test case for Image --- */

  it('should check Image', () => {
    const e1 =fixture.debugElement.query(By.css('#image'));
    expect(e1).toBeTruthy();
  });

  it('should have Image type of text', () => {
    const e1 =fixture.debugElement.query(By.css('#image'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });

  it('should have name as image', () => {
    const e1 =fixture.debugElement.query(By.css('#image'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('image');
  });

   it('should check image input value is correct', () => {
    let image=component.addVegetable.controls['image'];
    image.setValue('../../assets/images/tomato.jpg');
    expect(image.errors).toBeNull();    
  });
 
/*  test --- case for Select dropdown --- */

  it('should check select Menu',()=>{
    const e1 =fixture.debugElement.query(By.css('#sel')).nativeElement;
    let select=component.addVegetable.controls['category'];
    select.setValue('vegetables');
    expect(select.errors).toBeNull(); 
    e1.value=e1.options[1].value;
    fixture.detectChanges();
    let val=e1.options[e1.selectedIndex].label;
    expect(val).toEqual('fruits');
  })

/* --- test case for Button Disable --- */

  it('should check addVegetable button disabled', () => {
    fixture.detectChanges();
    let btn=fixture.debugElement.query(By.css('#btn')).nativeElement ;
    expect(btn.disabled).toBe(true );
   })

   it('should check addVegetable button enable', () => {
    let btn=fixture.debugElement.query(By.css('#btn')).nativeElement ;
    component.addVegetable.controls['name'].setValue('tomato');
    component.addVegetable.controls['price'].setValue('200');
    component.addVegetable.controls['image'].setValue('../../assets/images/jeans.jpg');
    component.addVegetable.controls['category'].setValue('fruits');
  
    fixture.detectChanges();
    expect(btn.disabled).toBe(true );
   })

});
