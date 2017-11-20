import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismeReferentDetailsPageComponent } from './organisme-referent-details-page.component';

describe('OrganismeReferentDetailsPageComponent', () => {
  let component: OrganismeReferentDetailsPageComponent;
  let fixture: ComponentFixture<OrganismeReferentDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganismeReferentDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismeReferentDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
