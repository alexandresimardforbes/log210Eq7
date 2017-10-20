import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismePageComponent } from './organisme-page.component';

describe('OrganismePageComponent', () => {
  let component: OrganismePageComponent;
  let fixture: ComponentFixture<OrganismePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganismePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
