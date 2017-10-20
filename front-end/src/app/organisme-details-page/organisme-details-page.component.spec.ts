import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismeDetailsPageComponent } from './organisme-details-page.component';

describe('OrganismeDetailsPageComponent', () => {
  let component: OrganismeDetailsPageComponent;
  let fixture: ComponentFixture<OrganismeDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganismeDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismeDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
