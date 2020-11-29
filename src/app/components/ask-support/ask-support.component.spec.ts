import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskSupportComponent } from './ask-support.component';

describe('AskSupportComponent', () => {
  let component: AskSupportComponent;
  let fixture: ComponentFixture<AskSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
