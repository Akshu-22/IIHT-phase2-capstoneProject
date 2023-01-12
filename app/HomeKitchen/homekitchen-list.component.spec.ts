import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomekitchenListComponent } from './homekitchen-list.component';

describe('HomekitchenListComponent', () => {
  let component: HomekitchenListComponent;
  let fixture: ComponentFixture<HomekitchenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomekitchenListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomekitchenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
