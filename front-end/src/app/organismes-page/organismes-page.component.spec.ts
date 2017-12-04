import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismesPageComponent } from './organismes-page.component';

describe('OrganismesPageComponent', () => {
  let component: OrganismesPageComponent;
  let fixture: ComponentFixture<OrganismesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganismesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
