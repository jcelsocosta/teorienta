import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditalComponent } from './form-edital.component';

describe('FormEditalComponent', () => {
  let component: FormEditalComponent;
  let fixture: ComponentFixture<FormEditalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
