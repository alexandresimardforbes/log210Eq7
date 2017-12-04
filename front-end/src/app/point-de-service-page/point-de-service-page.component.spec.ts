import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointDeServicePageComponent } from './point-de-service-page.component';

describe('PointDeServicePageComponent', () => {
  let component: PointDeServicePageComponent;
  let fixture: ComponentFixture<PointDeServicePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointDeServicePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointDeServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
