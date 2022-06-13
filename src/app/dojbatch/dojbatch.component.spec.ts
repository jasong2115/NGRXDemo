import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DojbatchComponent } from './dojbatch.component';

describe('DojbatchComponent', () => {
  let component: DojbatchComponent;
  let fixture: ComponentFixture<DojbatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DojbatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DojbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
