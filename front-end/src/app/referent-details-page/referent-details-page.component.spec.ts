import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferentDetailsPageComponent } from './referent-details-page.component';

describe('ReferentDetailsPageComponent', () => {
  let component: ReferentDetailsPageComponent;
  let fixture: ComponentFixture<ReferentDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferentDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferentDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
