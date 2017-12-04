import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDetailsPageComponent } from './local-details-page.component';

describe('LocalDetailsPageComponent', () => {
  let component: LocalDetailsPageComponent;
  let fixture: ComponentFixture<LocalDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
