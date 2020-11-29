import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHistoryCardComponent } from './service-history-card.component';

describe('ServiceHistoryCardComponent', () => {
  let component: ServiceHistoryCardComponent;
  let fixture: ComponentFixture<ServiceHistoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceHistoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
