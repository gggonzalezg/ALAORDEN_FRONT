import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionServiceComponent } from './decision-service.component';

describe('DecisionServiceComponent', () => {
  let component: DecisionServiceComponent;
  let fixture: ComponentFixture<DecisionServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
