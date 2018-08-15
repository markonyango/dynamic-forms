import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormInputComponent } from './form-input.component';

describe('FormInputComponent', () => {
  let comp: FormInputComponent;
  let fixture: ComponentFixture<FormInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    fixture = TestBed.createComponent(FormInputComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('has correct form element', () => {
    const element = fixture.nativeElement.querySelector('input') as HTMLElement;
    expect(element).toBeTruthy();
  });

});
