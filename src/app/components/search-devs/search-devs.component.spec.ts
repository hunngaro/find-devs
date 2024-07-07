import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDevsComponent } from './search-devs.component';

describe('SearchDevsComponent', () => {
  let component: SearchDevsComponent;
  let fixture: ComponentFixture<SearchDevsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDevsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
