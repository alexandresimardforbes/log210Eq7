import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointDeServiceDetailsPageComponent } from './point-de-service-details-page.component';

describe('PointDeServiceDetailsPageComponent', () => {
  let component: PointDeServiceDetailsPageComponent;
  let fixture: ComponentFixture<PointDeServiceDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointDeServiceDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointDeServiceDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
