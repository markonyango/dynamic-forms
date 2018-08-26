import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormSelectComponent } from './form-select.component';

describe('FormSelectComponent', () => {
  let comp: FormSelectComponent;
  let fixture: ComponentFixture<FormSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSelectComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    fixture = TestBed.createComponent(FormSelectComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('has correct form element', () => {
    const element = fixture.nativeElement.querySelector('mat-select') as HTMLElement;
    expect(element).toBeTruthy();
  });
});
