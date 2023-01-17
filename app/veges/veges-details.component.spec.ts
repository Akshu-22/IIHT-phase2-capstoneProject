import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VegesDetailsComponent } from './veges-details.component';

describe('VegesDetailsComponent', () => {
  let component: VegesDetailsComponent;
  let fixture: ComponentFixture<VegesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
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
