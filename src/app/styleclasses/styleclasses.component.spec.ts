import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleclassesComponent } from './styleclasses.component';

describe('StyleclassesComponent', () => {
  let component: StyleclassesComponent;
  let fixture: ComponentFixture<StyleclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleclassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
