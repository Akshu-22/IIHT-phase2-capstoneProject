import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VegesListComponent } from './veges-list.component';

describe('VegesListComponent', () => {
  let component: VegesListComponent;
  let fixture: ComponentFixture<VegesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
       
    ],
      declarations: [ VegesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
