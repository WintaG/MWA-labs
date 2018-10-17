import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivanComponent } from './livan.component';

describe('LivanComponent', () => {
  let component: LivanComponent;
  let fixture: ComponentFixture<LivanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
