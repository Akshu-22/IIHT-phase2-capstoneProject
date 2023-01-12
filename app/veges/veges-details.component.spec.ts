import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegesDetailsComponent } from './veges-details.component';

describe('VegesDetailsComponent', () => {
  let component: VegesDetailsComponent;
  let fixture: ComponentFixture<VegesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
