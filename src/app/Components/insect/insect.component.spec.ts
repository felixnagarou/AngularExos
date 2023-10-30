import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsectComponent } from './insect.component';

describe('UserComponent', () => {
  let component: InsectComponent;
  let fixture: ComponentFixture<InsectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsectComponent]
    });
    fixture = TestBed.createComponent(InsectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
