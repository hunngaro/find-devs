import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLayoutComponent } from './find-layout.component';

describe('FindLayoutComponent', () => {
  let component: FindLayoutComponent;
  let fixture: ComponentFixture<FindLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
