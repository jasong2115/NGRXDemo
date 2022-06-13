import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UosbatchComponent } from './uosbatch.component';

describe('UosbatchComponent', () => {
  let component: UosbatchComponent;
  let fixture: ComponentFixture<UosbatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UosbatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UosbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
