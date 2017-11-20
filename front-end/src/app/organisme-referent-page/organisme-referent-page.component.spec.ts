import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismeReferentPageComponent } from './organisme-referent-page.component';

describe('OrganismeReferentPageComponent', () => {
  let component: OrganismeReferentPageComponent;
  let fixture: ComponentFixture<OrganismeReferentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganismeReferentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismeReferentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
