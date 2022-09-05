import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairlaunchComponent } from './fairlaunch.component';

describe('FairlaunchComponent', () => {
  let component: FairlaunchComponent;
  let fixture: ComponentFixture<FairlaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairlaunchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairlaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
