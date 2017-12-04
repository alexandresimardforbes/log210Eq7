import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismesDetailsPageComponent } from './organismes-details-page.component';

describe('OrganismesDetailsPageComponent', () => {
  let component: OrganismesDetailsPageComponent;
  let fixture: ComponentFixture<OrganismesDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganismesDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismesDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
