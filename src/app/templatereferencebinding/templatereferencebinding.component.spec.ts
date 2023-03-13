import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatereferencebindingComponent } from './templatereferencebinding.component';

describe('TemplatereferencebindingComponent', () => {
  let component: TemplatereferencebindingComponent;
  let fixture: ComponentFixture<TemplatereferencebindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatereferencebindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatereferencebindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
